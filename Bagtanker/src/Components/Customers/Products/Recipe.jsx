import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useSupabase } from "../..//../Providers/SupabaseProvider";
import { useIngredientAndProductData } from "../../Hooks/IngredientAndProductData.jsx";

import style from "./Recipe.module.scss";

export const Recipe = ({ product, productId }) => {
	const ingredientAndProductData = useIngredientAndProductData();
	const [count, setCount] = useState(0);
	const { supabase } = useSupabase();

	// Hent det aktuelle like fra API'et
	useEffect(() => {
		const fetchCount = async () => {
			try {
				const { data, error } = await supabase
					.from("products") // Henter fra tabellen products
					.select("likes") //finder kolonnen likes
					.eq("id", productId) //finder det id i kolonne id hvor productId matcher
					.single(); // Forventer kun der kommer et resultat

				if (error) {
					console.error("Fejl ved hentning af likes:", error.message);
				} else {
					// Hvis data returnerer 'null', sættes count til 0
					setCount(data?.likes ?? 0);
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		fetchCount();
	}, [productId, supabase]);

	const filteredProductData = ingredientAndProductData.filter(
		(item) => item.product_id.id === product.id
	);

	console.log("Filtered data:", filteredProductData);
	console.log("Product:", product.id);

	return (
		<div className={style.recipeWrapper}>
			<div className={style.headerWrapper}>
				<h2>Opskrift</h2>
				<div className={style.likeWrapper}>
					<p>{count}</p>
					<button>
						<CiHeart className={style.CiHeart} />
					</button>
				</div>
			</div>
			<div className={style.ingridientWrapper}>
				<p>Varighed: {product.duration} min</p>
				<p>Antal: {product.amount} stk</p>
				{filteredProductData &&
					filteredProductData.map((ingridient, index) => (
						<div key={index} className={style.ingridients}>
							<p>{ingridient.amount}</p>
							<p>{ingridient.unit_id.abbreviation}</p>
							<p>{ingridient.ingredient_id.title}</p>
						</div>
					))}
			</div>
		</div>
	);
};
