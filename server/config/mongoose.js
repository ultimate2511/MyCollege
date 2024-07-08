import mongoose from 'mongoose';
//import dotenv from 'dotenv';

//dotenv.config();
let MONGO = 'mongodb+srv://gourabh0911:axwEUT2GpJFZRkqi@mycollege.0dkfwsk.mongodb.net/?retryWrites=true&w=majority&appName=MyCollege'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
