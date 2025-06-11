import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
	const mongodbUri = process.env.MONGODB_URI;
	try {
		const comm = await mongoose.connect(mongodbUri);
		console.log("MongoDB connected Successfully:", comm.connection.host);
	} catch (error) {
		console.log("MongoDB connection failed:", error.messsage);
		process.exit(1);
	}
};

export default connectDB;
