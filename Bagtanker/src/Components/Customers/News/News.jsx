import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useEffect, useState } from "react";
import { useNewsData } from "../../Hooks/NewsData.jsx"; // Importer useNewsData
import { NewsSubNavigation } from "./NewsSubNavigation.jsx";
import { formatDate } from "../../Utils/DateUtils.jsx";

import style from "./News.module.scss";

export const News = ({ onDataLoaded }) => {
	const newsData = useNewsData(); // Hent data fra useNewsData hooken
	const [selectedNews, setSelectedNews] = useState(null);

	useEffect(() => {
		// Hvis der er data, og selectedNews ikke allerede er sat, sæt den til den seneste nyhed
		if (newsData.length > 0 && !selectedNews) {
			setSelectedNews(newsData[0]);
			if (onDataLoaded) {
				onDataLoaded(newsData); // Kalder onDataLoaded med data fra useNewsData
			}
		}
	}, [newsData, selectedNews, onDataLoaded]);

	// Håndter valg af nyhed fra navigationen
	const handleNewsSelect = (news) => {
		setSelectedNews(news);
	};

	return (
		<>
			<PageWrapper title={selectedNews?.title}>
				<div className={style.newsWrapper}>
					<div className={style.selectedNews}>
						<p>{formatDate(selectedNews?.created_at)}</p>
						<p>{selectedNews?.teaser}</p>
						{selectedNews?.images && (
							<img
								src={selectedNews.images.filename} // Brug billed-URL'en
								alt={selectedNews.title}
							/>
						)}
						<p>{selectedNews?.content}</p>
					</div>
					<NewsSubNavigation
						allNewsData={newsData}
						onNewsSelect={handleNewsSelect}
					/>
				</div>
			</PageWrapper>
		</>
	);
};
