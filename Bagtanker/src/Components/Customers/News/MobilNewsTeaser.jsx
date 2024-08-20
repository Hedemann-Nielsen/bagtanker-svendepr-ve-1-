import { useEffect, useState } from "react";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { Link } from "react-router-dom";

import style from "./NewsTeaser.module.scss";

// Funktion til at formatere datoen
// const formatDate = (dateString) => {
// 	const date = new Date(dateString);
// 	return new Intl.DateTimeFormat("da-DK", {
// 		day: "numeric",
// 		month: "long",
// 		year: "numeric",
// 	}).format(date);
// };

export const MobilNewsTeaser = () => {
	const { supabase } = useSupabase();
	const [newsData, setNewsData] = useState([]);

	useEffect(() => {
		const getNewsData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("news") //henter fra tabellen news
						.select("created_at, title, teaser, images(filename)") // henter created_at, title, teaser, fra tabellen og filename fra images fordi de har en  foreginkey
						// .order("RANDOM") // Sorter tilfældigt
						.limit("1"); // Begræns til 1 nyheder
					if (error) {
						console.error(
							"Fejl ved hentning af data fra NewsTeaser:",
							error.message
						);
					} else {
						setNewsData(data);
						// console.log("Hentede news teaser data:", data);
					}
				}
				// console.log(newsData);
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getNewsData();
		console.log(newsData[0]);
	}, [supabase]);

	// Hent billednavnet med filtypenavn
	// const fullFileName = newsData[0].images.filename.substring(
	// 	newsData[0].images.filename.lastIndexOf("/") + 1
	// );

	// // Fjern filtypenavnet (.jpg eller lignende)
	// const fileNameWithoutExtension = fullFileName
	// 	.split(".")
	// 	.slice(0, -1)
	// 	.join(".");

	// console.log(fileNameWithoutExtension);

	return (
		<section className={style.MobilnewsTeaser}>
			<h1>Nyheder</h1>

			<Link to="/news">
				<figure className={style.newsTeaserCard}>
					<img
					// src={newsData[0].images.filename}
					// alt={fileNameWithoutExtension}
					/>
					<figcaption>
						<h2>{formatDate(newsData.created_at)}</h2>
						<h3>{newsData.title}</h3>
						<p>{newsData.teaser}</p>
					</figcaption>
				</figure>
			</Link>
		</section>
	);
};
