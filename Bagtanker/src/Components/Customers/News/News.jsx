import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useEffect, useMemo, useState } from "react";
import { useNewsData } from "../../Hooks/NewsData.jsx";
import { NewsSubNavigation } from "./NewsSubNavigation.jsx";
import { formatDate } from "../../Utils/DateUtils.jsx";
import { useParams, useLocation } from "react-router-dom";

import style from "./News.module.scss";

export const News = ({ onDataLoaded }) => {
	const newsData = useNewsData();
	const { newsId } = useParams(); // Hent newsId fra URL'en
	const location = useLocation(); // Hent den nuværende URL-location
	const [selectedNews, setSelectedNews] = useState(null);

	useEffect(() => {
		if (newsData.length > 0) {
			if (newsId) {
				// Hvis der er et newsId i URL'en, find den matchende nyhed
				const news = newsData.find((item) => item.id === newsId);
				setSelectedNews(news || newsData[0]);
			} else {
				// Hvis der ikke er et newsId, vis den seneste nyhed
				const sortedNewsData = [...newsData].sort(
					(a, b) => new Date(b.created_at) - new Date(a.created_at)
				);
				setSelectedNews(sortedNewsData[0]);
			}
			if (onDataLoaded) {
				onDataLoaded(newsData);
			}
		}
	}, [newsData, newsId, onDataLoaded]);

	return (
		<>
			<PageWrapper title={selectedNews?.title}>
				<div className={style.newsWrapper}>
					<div className={style.selectedNews}>
						<p>{formatDate(selectedNews?.created_at)}</p>
						<p>{selectedNews?.teaser}</p>
						{selectedNews?.images && (
							<img
								src={selectedNews.images.filename}
								alt={selectedNews.title}
							/>
						)}
						<p>{selectedNews?.content}</p>
					</div>
					<NewsSubNavigation onNewsSelect={(news) => setSelectedNews(news)} />
				</div>
			</PageWrapper>
		</>
	);
};
