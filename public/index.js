const PORT = require("./server.js").PORT; // Import the PORT from server.js
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav-list");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
});

// Placeholder for fetching data
const dataPlaceholder = document.querySelector("#data-placeholder");
const dropdown = document.getElementById("resource-select");
let url; // URL to fetch data from

// This function fetches data from a given URL and returns the JSON response.
const fetchData = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return await response.json();
	} catch (error) {
		console.error("Fetch error:", error);
	}
};

dropdown.addEventListener("change", async function () {
	// 'this.value' gives the value of the selected option
	// 'this.options[this.selectedIndex].text' gives the visible text of the selected option
	if (this.value) {
		url = `http://localhost:3000/api/${this.options[this.selectedIndex].value}`;
		let result = await fetchData(url);
		dataPlaceholder.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
		console.log(fetchData(url));
	} else {
		console.log("You have not selected anything yet.");
	}
});
