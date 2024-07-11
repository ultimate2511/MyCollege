import express from 'express';
import bcryptjs from 'bcryptjs';
import User from '../Models/User.js';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
export const  signup = async (req, res) => {
    const { name, mobileNumber, email, password } = req.body;
    if (
      !name ||
      !email ||
      !password || !mobileNumber ||
      name === '' ||
      email === '' ||
      password === '' || 
      mobileNumber === ''
    ) {
      next(errorHandler(400, 'All fields are required'));
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const   newUser = new User({
        name,
        mobileNumber,
        email,
        password:hashedPassword,
      });
    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
      user = await User.findOne({ mobileNumber });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
      // Create a new user
      
      await newUser.save();
      res.json('Signup successful');
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }

export const signin = async (req, res) => {
    const { email, mobileNumber ,password } = req.body;
    if (!mobileNumber || !email || !password || email === '' || password === '' || mobileNumber ==='') {
      next(errorHandler(400, 'All fields are required'));
    }
    try {
        let validUser = await User.findOne({ email , mobileNumber});
        if (!validUser) {
          return next(errorHandler(404, 'User not found'));
        }
        

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
    const token = jwt.sign(
        { id: validUser._id, isAdmin: validUser.isAdmin },
        'gourabh'
      );
      
      const { password: pass, ...rest } = validUser._doc;
  
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } catch(err){
        console.error(err.message);
      res.status(500).send('Server error');
    }
}
