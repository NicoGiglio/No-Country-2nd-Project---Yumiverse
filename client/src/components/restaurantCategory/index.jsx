import { useRestaurantStore } from "../../stores";
import MenuItem from "../menuItem";

export default function RestaurantCategory({ showBottomSheet }) {
	const setShowBottomSheet = useRestaurantStore(state => state.setShowBottomSheet);

	const handlerCardClick = () => {
		setShowBottomSheet(!showBottomSheet);
	};

	const restaurantMenu = [
		{
			category: "Hamburguesas",
			items: [
				{
					id: 1,
					itemName: "Classic Burger",
					price: 8.95,
					description:
						"Carne, queso cheddar, lechuga, tomate, cebolla, mayonesa y ketchup. Incluye papas fritas.",
				},
				{
					id: 2,
					itemName: "Cheese Lover's Burger",
					price: 9.95,
					description:
						"Doble carne, triple queso, bacon, lechuga, tomate, cebolla, mayonesa y ketchup. Incluye papas fritas.",
				},
				{
					id: 3,
					itemName: "Spicy Jalapeño Burger",
					price: 10.45,
					description:
						"Carne, queso pepper jack, jalapeños, guacamole, lechuga, tomate, cebolla y salsa picante. Incluye papas fritas.",
				},
				{
					id: 4,
					itemName: "Mushroom Swiss Burger",
					price: 9.75,
					description:
						"Carne, queso suizo, champiñones salteados, cebolla caramelizada, lechuga, tomate y mayonesa. Incluye papas fritas.",
				},
			],
		},
		{
			category: "Pizzas",
			items: [
				{
					id: 5,
					itemName: "Margherita Pizza",
					price: 11.5,
					description: "Salsa de tomate, mozzarella fresca y albahaca fresca.",
				},
				{
					id: 6,
					itemName: "Pepperoni Feast Pizza",
					price: 12.75,
					description: "Salsa de tomate, doble pepperoni, mozzarella y orégano.",
				},
				{
					id: 7,
					itemName: "Vegetarian Delight Pizza",
					price: 11.95,
					description:
						"Salsa de tomate, champiñones, pimientos, cebolla, aceitunas, mozzarella y albahaca fresca.",
				},
				{
					id: 8,
					itemName: "BBQ Chicken Pizza",
					price: 13.25,
					description:
						"Salsa barbacoa, pollo a la parrilla, cebolla roja, maíz, mozzarella y cilantro.",
				},
			],
		},
	];

	return (
		<section className="w-full h-auto p-4 flex flex-col gap-8 bg-secundario">
			{restaurantMenu.map(item => (
				<div key={item.category} className="flex flex-col gap-4">
					<h2 className="font-bold">{item.category}</h2>
					{item.items.map(item => (
						<MenuItem
							handlerCardClick={handlerCardClick}
							key={item.id}
							description={item.description}
							title={item.itemName}
							price={item.price}
						/>
					))}
				</div>
			))}
		</section>
	);
}
