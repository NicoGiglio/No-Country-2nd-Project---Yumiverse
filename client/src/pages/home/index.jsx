import React from "react";
import SectionSlider from "../../components/sliders/section-slider";

export default function HomePage() {
	const restaurantData = [
		{
			id: 1,
			location: "Av. Saenz Peña 146, Junín",
			nameRestaurant: "Vinilo Bar",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["classic", "hamburger"],
			openRestaurant: true,
			numberOfScores: "22",
			scores: "3",
		},
		{
			id: 2,
			location: "Calle San Martín 123, Buenos Aires",
			nameRestaurant: "Gastronómico",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["classic", "grill"],
			openRestaurant: false,
			numberOfScores: "15",
			scores: "4",
		},
		{
			id: 3,
			location: "Plaza de Mayo 456, Córdoba",
			nameRestaurant: "La Parrilla",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["grill", "pizza"],
			openRestaurant: true,
			numberOfScores: "30",
			scores: "5",
		},
		{
			id: 4,
			location: "Rivadavia 789, Mendoza",
			nameRestaurant: "Café del Valle",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["classic", "hamburger"],
			openRestaurant: true,
			numberOfScores: "18",
			scores: "4",
		},
		{
			id: 5,
			location: "Corrientes 567, Rosario",
			nameRestaurant: "Pasta Express",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["pizza", "hamburger"],
			openRestaurant: false,
			numberOfScores: "25",
			scores: "3",
		},
		{
			id: 6,
			location: "San Juan 890, Salta",
			nameRestaurant: "Sabores del Norte",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["classic", "grill"],
			openRestaurant: true,
			numberOfScores: "20",
			scores: "4",
		},
		{
			id: 7,
			location: "Av. Belgrano 432, La Plata",
			nameRestaurant: "Veggie Delight",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["hamburger", "grill"],
			openRestaurant: true,
			numberOfScores: "28",
			scores: "5",
		},
		{
			id: 8,
			location: "Independencia 654, Tucumán",
			nameRestaurant: "Taco Fiesta",
			imageRestaurant:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categories: ["pizza", "hamburger"],
			openRestaurant: false,
			numberOfScores: "16",
			scores: "3",
		},
	];

	const categoryData = [
		{
			id: 1,
			title: "Parrilla",
			href: "https://www.facebook.com/",
			imgSrc: "grill",
			className: "",
		},
		{
			id: 2,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
			className: "",
		},
		{
			id: 3,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
			className: "",
		},
		{
			id: 4,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
			className: "",
		},
		{
			id: 5,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
			className: "",
		},
		{
			id: 6,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
			className: "",
		},
		{
			id: 7,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
		{
			id: 8,
			title: "Pizzería",
			href: "/",
			imgSrc: "pizza",
		},
	];

	return (
		<main className="flex flex-col gap-8 overflow-hidden">
			<SectionSlider data={categoryData} cardType={true} />
			<SectionSlider title={"Cerca de tí"} data={restaurantData} />
			<SectionSlider title={"Top Ranked"} data={restaurantData} />
			<SectionSlider title={"Pizzas"} data={restaurantData} />
		</main>
	);
}
