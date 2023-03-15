import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import Estate from '../models/estate.js';

dotenv.config();
const router = express.Router();


export const getEstateInfo = async (req, res) => {
  try {
    const estateData = await Estate.find()

    res.status(200).json(estateData);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching the estate requested." });
  }
};

export const getEstateByID = async (req, res) => {
    try {
      const estateData = await Estate.findById(req.query.id)  
  
      res.status(200).json(estateData);
    } catch (error) {
      res.status(404).json({ message: "An error has occurred fetching the estate requested." });
    }
  };

export const newEstate = async (req, res) => {
  try {
    const { address, city, rooms, bathrooms, garages } = req.body;

    const createdEstate = await Estate.create({ address: address, city: city, rooms: rooms, bathrooms: bathrooms, garages: garages });


    const estateResponse = {
      address: createdEstate.address,
      city: createdEstate.city
    }

    res.status(201).json({ result: estateResponse });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering the estate." + error });
  }
};


export default router;