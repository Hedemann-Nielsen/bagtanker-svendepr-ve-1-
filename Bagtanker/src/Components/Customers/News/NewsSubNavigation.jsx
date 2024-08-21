import style from "./newsSubNav.module.scss";
import { formatDate } from "../../Utils/DateUtils.jsx";

export const NewsSubNavigation = ({ allNewsData, onNewsSelect }) => {
	return (
		<div className={style.newsSubNav}>
			<p className={style.seeAlso}>Se også...</p>
			{allNewsData.map((news, index) => (
				<div
					key={index}
					className={style.newsBox}
					onClick={() => onNewsSelect(news)} // Håndter klik på en nyhed
				>
					<h5>{formatDate(news.created_at)}</h5>
					<p>{news.title}</p>
				</div>
			))}
		</div>
	);
};
