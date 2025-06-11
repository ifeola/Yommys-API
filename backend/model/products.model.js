import mongoose from "mongoose";

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

// Create a Mongoose model from the schema
const Product = mongoose.model("Product", dataSchema);

export default Product;
