import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    const options: ConnectOptions = {
      useUnifiedTopology: true,
    } as ConnectOptions & { useUnifiedTopology?: boolean };
    await mongoose.connect(process.env.MONGODB_URI!, options);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;