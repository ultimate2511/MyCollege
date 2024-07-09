import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../Models/User.js';
import jwt from 'jsonwebtoken';
export const  signup = async (req, res) => {
    const { name, mobileNumber, email, password } = req.body;
  
    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      // Create a new user
      user = new User({
        name,
        mobileNumber,
        email,
        password
      });
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      // Save the user to the database
      await user.save();
  
      res.status(201).json({ msg: 'User registered successfully' });
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }

export const signin = async (req, res) => {
    const { email, mobileNumber ,password } = req.body;
    try {
        let validUser = await User.findOne({ email });
        if (!validUser) {
            res.status(404).send('User not found');
        }

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
        res.status(400).send('Invalid Password');
    }
    const token = jwt.sign(
        { id: validUser._id, isAdmin: validUser.isAdmin },
        "gourabh"
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