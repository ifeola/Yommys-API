const express = require("express");
const products = require("./products.js");
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

// Get product by ID
app.get("/api/products/:id", (request, response) => {});

app.listen(PORT, () => {
	console.log(`Server running on localhost:${PORT}`);
});
