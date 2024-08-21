import style from "./NewsTeaser.module.scss";
import { NewsTeaserCard } from "./NewsTeaserCard.jsx";
import { useNewsData } from "../../Hooks/NewsData.jsx";
import { Link } from "react-router-dom";

export const NewsTeaser = () => {
	const newsTeaser = useNewsData();

	// Få de sidste 3 elementer fra arrayet
	const lastThreeNewsTeasers = newsTeaser.slice(-3).reverse();

	return (
		<section className={style.newsTeaser}>
			<h1>Nyheder</h1>
			{lastThreeNewsTeasers.map((newsTeaser) => (
				<Link key={newsTeaser.id} to={`/news/${newsTeaser.id}`}>
					<NewsTeaserCard newsTeaser={newsTeaser} />
				</Link>
			))}
		</section>
	);
};
