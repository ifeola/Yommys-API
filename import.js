const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// --- CONFIGURATION ---
// IMPORTANT: Paste your full MongoDB Atlas connection string here.
// For security, you might use dotenv, but for a one-time script, this is okay.
const dbURI =
	"mongodb+srv://nomorelimit11:ePBZiFW0jDgonULg@apis.qhqvhma.mongodb.net/?retryWrites=true&w=majority&appName=apis";

// The path to your JSON data file
const dataFilePath = path.join(
	__dirname,
	"/backend/db-importer",
	"products.json"
);

// The name of the collection you want to create/populate
const collectionName = "products";
// --- END CONFIGURATION ---

// Define a schema that matches the structure of your data.
const VariantSchema = new mongoose.Schema(
	{
		color: {
			type: String,
			trim: true,
		},
		size: {
			type: String,
			trim: true,
		},
		sku_suffix: {
			type: String,
			required: true,
			trim: true,
		},
		stock: {
			type: Number,
			required: true,
			min: 0,
			default: 0,
		},
	},
	{ _id: false }
); // _id is not needed for sub-documents in an array
// Mongoose uses schemas to model your application data.
const dataSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			required: [true, "Product SKU or ID is required."],
			unique: true,
			trim: true,
		},
		name: {
			type: String,
			required: [true, "Product name is required."],
			trim: true,
		},
		brand: {
			type: String,
			trim: true,
		},
		author: {
			// Specific to books
			type: String,
			trim: true,
		},
		category: {
			type: String,
			required: true,
			trim: true,
			enum: [
				// Using an enum to restrict to known categories from your data
				"Electronics",
				"Apparel",
				"Home Appliances",
				"Books",
				"Sports",
				"Kitchen Appliances",
				"Beauty",
				"Office Furniture",
				"Toys",
				"Garden",
				"Home Decor",
				"Pet Supplies",
				"Tools",
				"Musical Instruments",
				"Outdoors",
				"Baby",
				"Jewelry",
				"Health Supplements",
				"Sports Equipment",
				"Office Supplies",
			],
		},
		subcategory: {
			type: String,
			trim: true,
		},
		price: {
			type: Number,
			required: [true, "Product price is required."],
			min: [0, "Price cannot be negative."],
		},
		currency: {
			type: String,
			required: true,
			default: "USD",
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		inStock: {
			type: Boolean,
			default: true,
		},
		stockQuantity: {
			type: Number,
			required: true,
			min: 0,
			default: 0,
		},
		features: {
			type: [String], // An array of strings
		},
		isbn: {
			// Specific to books
			type: String,
			trim: true,
		},
		rating: {
			average: {
				type: Number,
				min: 0,
				max: 5,
				default: 0,
			},
			count: {
				type: Number,
				min: 0,
				default: 0,
			},
		},
		variants: [VariantSchema], // An array of the Variant sub-schema
	},
	{
		// Add createdAt and updatedAt timestamps automatically
		timestamps: true,
	},
	{ _id: false }
);

// Create a Mongoose model based on the schema
const DataModel = mongoose.model(collectionName, dataSchema);

// Main function to connect, clear, and import data
const importData = async () => {
	try {
		// Connect to MongoDB
		await mongoose.connect(dbURI);
		console.log("Successfully connected to MongoDB.");

		// Optional: Clear existing data in the collection
		await DataModel.deleteMany({});
		console.log("Existing data cleared from collection.");

		// Read the local JSON file
		const rawData = fs.readFileSync(dataFilePath, "utf-8");
		const data = JSON.parse(rawData);
		console.log(`${data.length} records read from file.`);

		// Insert the data into the collection
		await DataModel.insertMany(data);
		console.log("Data has been successfully imported!");
	} catch (error) {
		console.error("Error during data import:", error);
	} finally {
		// Close the database connection
		await mongoose.connection.close();
		console.log("MongoDB connection closed.");
	}
};

// Run the import function
importData();
