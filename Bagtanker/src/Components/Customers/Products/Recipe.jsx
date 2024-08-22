// import { useState } from "react";
import style from "./Recipe.module.scss";
// import { formatDate } from "../../Utils/DateUtils.jsx";
import { useIngredientAndProductData } from "../../Hooks/IngredientAndProductData.jsx";

export const Recipe = () => {
	const ingredientAndProductData = useIngredientAndProductData();
	console.log("ingredientAndProductData:", ingredientAndProductData);

	const newsData = useNewsData();
	const allNewsDataRevers = newsData.reverse();
	const [selectedNews, setSelectedNews] = useState(null);

	const handleNewsClick = (news) => {
		setSelectedNews(news);
		onNewsSelect(news);
	};

	// ingredient from ingredients and amount from products

	return (
		<>
			<p>Recepie</p>
			<div className={style.newsSubNav}>
				{recepieData.map((ingredient, index) => (
					<div
						key={index}
						className={`${style.newsBox} ${
							selectedNews === news ? style.selected : ""
						}`}
						onClick={() => handleNewsClick(news)}>
						<h5>{formatDate(news.created_at)}</h5>
						<p>{news.title}</p>
					</div>
				))}
			</div>
		</>
	);
};
