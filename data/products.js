const products = {
	services: [
		{
			id: "SVC001",
			name: "Website Development",
			category: "Digital Services",
			description:
				"Custom website design and development tailored to your business needs",
			price_range: {
				min: 1000,
				max: 10000,
				currency: "USD",
			},
			delivery_time: "2-6 weeks",
			features: [
				"Responsive design",
				"SEO optimization",
				"CMS integration",
				"1 year maintenance",
			],
			available: true,
		},
		{
			id: "SVC002",
			name: "Professional Cleaning",
			category: "Home Services",
			description: "Thorough residential or commercial cleaning service",
			price_range: {
				min: 80,
				max: 300,
				currency: "USD",
			},
			service_options: [
				"One-time deep cleaning",
				"Recurring maintenance",
				"Move-in/move-out cleaning",
			],
			available: true,
			service_area: ["New York", "New Jersey", "Connecticut"],
		},
		{
			id: "SVC003",
			name: "Financial Consulting",
			category: "Professional Services",
			description: "Expert advice for personal or business financial planning",
			pricing_model: "hourly",
			rate: 150,
			currency: "USD",
			specializations: [
				"Retirement planning",
				"Tax optimization",
				"Investment strategies",
			],
			certifications: ["CFP", "CPA"],
			available: true,
		},
		{
			id: "SVC004",
			name: "24/7 IT Support",
			category: "Business Services",
			description:
				"Round-the-clock technical support for your business infrastructure",
			pricing_model: "monthly subscription",
			price: 499,
			currency: "USD",
			features: [
				"Remote support",
				"On-site assistance",
				"Network monitoring",
				"Priority response",
			],
			service_levels: [
				{
					name: "Basic",
					price: 299,
					features: ["Remote support only", "Business hours"],
				},
				{
					name: "Premium",
					price: 799,
					features: ["24/7 support", "1-hour response", "On-site visits"],
				},
			],
		},
		{
			id: "SVC005",
			name: "Personal Training",
			category: "Health & Wellness",
			description:
				"Customized fitness programs with certified personal trainer",
			pricing_options: [
				{
					name: "Single session",
					price: 75,
					duration: "1 hour",
				},
				{
					name: "Monthly package",
					price: 250,
					sessions: 4,
					savings: "16%",
				},
				{
					name: "3-month transformation",
					price: 600,
					sessions: 12,
					savings: "33%",
				},
			],
			modality: ["In-person", "Virtual", "Hybrid"],
			specialties: ["Weight loss", "Strength training", "Post-rehabilitation"],
		},
	],
	metadata: {
		total_services: 5,
		last_updated: "2023-11-01",
		service_categories: [
			"Digital Services",
			"Home Services",
			"Professional Services",
			"Business Services",
			"Health & Wellness",
		],
	},
};

export default products;
