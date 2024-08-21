import style from "./NewsTeaser.module.scss";
import { NewsTeaserCard } from "./NewsTeaserCard.jsx";
import { useNewsData } from "../../Hooks/NewsData.jsx";
import { Link } from "react-router-dom";

export const NewsTeaser = () => {
	const newsTeaser = useNewsData();

	// Få de sidste 3 elementer fra arrayet
	const lastThreeNewsTeasers = newsTeaser.slice(-3);

	return (
		<section className={style.newsTeaser}>
			<h1>Nyheder</h1>
			<Link to="/news">
				{lastThreeNewsTeasers.map((newsTeaser, index) => (
					<NewsTeaserCard key={index} newsTeaser={newsTeaser} />
				))}
			</Link>
		</section>
	);
};
