export default function FoodTag({ categorie }) {
	return (
		<a href="/restaurant/asdf" className="flex items-center justify-center px-2 py-1 bg-texts rounded-2xl text-principal">
			<span>{categorie}</span>
		</a>
	);
}
