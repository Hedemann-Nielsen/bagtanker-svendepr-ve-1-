import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useNewsTeaserData = () => {
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
						.limit("3"); // Begræns til 3 nyheder
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
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getNewsData();
	}, [supabase]);

	return newsData;
};
