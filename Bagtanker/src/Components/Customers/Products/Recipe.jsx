// import { useState } from "react";
import style from "./Recipe.module.scss";
// import { formatDate } from "../../Utils/DateUtils.jsx";
import { useIngredientAndProductData } from "../../Hooks/IngredientAndProductData.jsx";

export const Recipe = ({ product }) => {
	const ingredientAndProductData = useIngredientAndProductData();
	console.log("ingredientAndProductData:", ingredientAndProductData);
	// console.log(product);

	const filteredData = ingredientAndProductData.filter(
		(item) => item.product_id.id === product.id
	);

	console.log("Filtered data:", filteredData);
	console.log("Product:", product);

	return (
		<div className={style.recipeWrapper}>
			<h2>Opskrift</h2>
			<div className={style.ingridientWrapper}>
				<p>Varighed: {product.duration} min</p>
				<p>Antal: {product.amount} stk</p>
				{filteredData &&
					filteredData.map((ingridient, index) => (
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
