// required packages
import path from 'path';
import http from 'http';
import cors from 'cors';
import dotenv from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';

// api functions and routes
import userRoutes from './routes/users.js';
import estateRoutes from './routes/estates.js';
// import { tickers } from './web_sockets/tickers.js';
// environment configuration
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setup express.js and socket.io
const app = express();
const server = http.createServer(app);
const io = new Server(server);



// express.js configuration
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: (origin, callback) => {
      if ("https://realrs-api.onrender.com" !== -1 || !origin) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'))
      }
  },
  credentials: true,
  optionsSuccessStatus: 200
}))



// express.js routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.use('/user', userRoutes);
app.use('/estate', estateRoutes);


// socket.io data emission
io.on('connection', (socket) => {
  tickers(socket);
});



// mongodb and server connections
const CONNECTION_URL = process.env.MONGO_CONNECTION_STRING;
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen(PORT, () => console.log(`Node.JS Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`An error has occurred: ${error}`));
