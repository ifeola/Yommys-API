const express = require("express");
const fs = require("fs").promises;
const products = require("./data/products.js");
const contacts = require("./data/contacts.js");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// --- Serve Static Files ---
// This line tells Express to serve any files found in the 'public' directory
// without you having to create specific routes for each file.
// path.join(__dirname, 'public') creates an absolute path to the public folder,
// which is safer than using a relative path.
app.use(express.static(path.join(__dirname, "public")));

// Go to Homepage
app.get("/", (request, response) => {
	const index = path.join(__dirname, "public", "index.html");
	response.sendFile(index);
});

// Get all products
app.get("/api/products", (request, response) => {
	response.json(products);
});

// Get Product by ID
app.get("/api/products/:id", (request, response) => {
	const { id: requestedId } = request.params; // requestedId is a string, e.g., "SKU20050"

	// Optional: Validate if the ID should not be empty
	// if (!requestedId || requestedId.trim() === "") {
	//     return response.status(400).json({ message: "Product ID cannot be empty." });
	// }

	// Find the product by its string ID.
	// This assumes 'product.id' in your 'products' array is also a string.
	const product = products.find((product) => product.id === requestedId);

	if (!product) {
		// If product is undefined, it means no product with that ID was found.
		return response.status(404).json({ message: "Product not found" });
	}

	// Product was found, send it in the response with a 200 OK status (default for .json).
	return response.json(product);
});

// Get all contacts
app.get("/api/contacts", (request, response) => {
	response.json(contacts);
});

// Get contact by ID
app.get("/api/contacts/:id", (request, response) => {});

app.listen(PORT, () => {
	console.log(`Server running on localhost:${PORT}`);
});
