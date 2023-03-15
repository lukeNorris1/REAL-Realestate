import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import User from '../models/user.js';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
const router = express.Router();


export const registerUser = async (req, res) => {
    console.log(req.body)
  try {
    const { email, password, firstName, lastName } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use." });
    } else if (!firstName) {
      return res.status(400).json({ message: "Must include first name. " });
    } else if (!lastName) {
      return res.status(400).json({ message: "Must include last name. " });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHashed = await bcrypt.hash(password, salt);
    const createdUser = await User.create({ email: email, password: passwordHashed, name: `${firstName} ${lastName}` });
    const token = jwt.sign({ email: createdUser.email, id: createdUser._id }, jwtSecret, { expiresIn: "15m" });


    const userResponse = {
      name: createdUser.name,
      email: createdUser.email
    }

    res.status(201).json({ result: userResponse, token: token });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering the user." + error });
  }
};

export const loginUser = async (req, res) => {
    console.log(req.body)
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    const passwordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: "Invalid login credentials." });
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, jwtSecret, { expiresIn: "15m" });


    const userResponse = {
      name: existingUser.name,
      email: existingUser.email
    }

    res.status(200).json({ result: userResponse, token: token });
  } catch (err) {
    res.status(500).json({ message: "An error occurred while registering the user." });
  }
};

export const getUserInfo = async (req, res) => {
  try {
    const userData = await User.findById(req.userId);

    const userResponse = {
      name: userData.name,
      email: userData.email,
      coins: userData.coins,
    }

    res.status(200).json(userResponse);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching the user requested." });
  }
};

export const updateUserName = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.userId)) {
      return res.status(404).send(`No user with id: ${req.userId}`);
    }

    if (req.userId === process.env.GUEST_ID) {
      return res.status(400).send({ message: "Not allowed to modify guest account!" });
    }

    await User.findByIdAndUpdate(req.userId, { name: `${firstName} ${lastName}` });
    const updatedUser = await User.findById(req.userId);


    const userResponse = {
      name: updatedUser.name,
      email: updatedUser.email,
      coins: updatedUser.coins,
    }

    res.status(200).json(userResponse);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred updating your username." });
  }
};

export const updateUserPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, newPasswordConfirmed } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.userId)) {
      return res.status(404).send(`No user with id: ${req.userId}`);
    }

    if (req.userId === process.env.GUEST_ID) {
      return res.status(400).send({ message: "Not allowed to modify guest account!" });
    }

    if (newPassword !== newPasswordConfirmed) {
      return res.status(400).json({ message: "Passwords do not match!." });
    }

    const userData = await User.findById(req.userId);
    const passwordCorrect = await bcrypt.compare(currentPassword, userData.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: "Invalid old password!" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHashed = await bcrypt.hash(newPassword, salt);

    await User.findByIdAndUpdate(req.userId, { password: passwordHashed });
    res.status(200).json({ message: "Password successfully updated!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred updating your username." });
  }
};

export const removeUser = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.userId)) {
      return res.status(404).send(`No user with id: ${req.userId}`);
    }

    if (req.userId === process.env.GUEST_ID) {
      return res.status(400).send({ message: "Not allowed to modify guest account!" });
    }

    await User.findByIdAndDelete(req.userId);

    res.status(200).json({ message: "User successfully deleted!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred removing the user." });
  }
}

export default router;