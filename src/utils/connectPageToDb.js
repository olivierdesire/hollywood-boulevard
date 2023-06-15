import mongoose from "mongoose";

const connectPageToDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    } else {
      return mongoose.connect(process.env.DATABASE_URI);
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectPageToDb;
