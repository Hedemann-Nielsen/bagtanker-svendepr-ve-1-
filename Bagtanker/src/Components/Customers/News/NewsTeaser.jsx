import style from "./NewsTeaser.module.scss";
import { NewsTeaserCard } from "./NewsTeaserCard.jsx";
import { useNewsTeaserData } from "../../Hooks/NewsData.jsx";
import { Link } from "react-router-dom";

export const NewsTeaser = () => {
	const newsTeaser = useNewsTeaserData();
	// console.log(newsTeaser);

	return (
		<>
			<section className={style.newsTeaser}>
				<h1>Nyheder</h1>
				<Link to="/news">
					{newsTeaser &&
						newsTeaser.map((newsTeaser, index) => (
							<NewsTeaserCard key={index} newsTeaser={newsTeaser} />
						))}
				</Link>
			</section>
		</>
	);
};
