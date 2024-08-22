import { useState } from "react";
import style from "./newsSubNav.module.scss";
import { formatDate } from "../../Utils/DateUtils.jsx";
import { useNewsData } from "../../Hooks/NewsData.jsx";

export const NewsSubNavigation = ({ onNewsSelect }) => {
	const newsData = useNewsData();
	const allNewsDataRevers = newsData.reverse();
	const [selectedNews, setSelectedNews] = useState(null);

	const handleNewsClick = (news) => {
		setSelectedNews(news);
		onNewsSelect(news);
		scrollToTop();
	};

	//funktion til at brugeren bliver sendt til toppen(sub menuen) af siden, hvor nyheden vises.
	const scrollToTop = () => {
		window.scrollTo({
			top: 200, // Scroller til top af siden
			behavior: "smooth", // Animeret scroll, for at brugeren bedre kan følge med i hvad der sker.
		});
	};

	return (
		<div className={style.newsSubNav}>
			<p className={style.seeAlso}>Se også...</p>
			{allNewsDataRevers.map((news, index) => (
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
	);
};
