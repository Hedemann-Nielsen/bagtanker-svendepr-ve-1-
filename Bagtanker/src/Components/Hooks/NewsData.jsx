import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useNewsData = () => {
	const { supabase } = useSupabase();
	const [newsData, setNewsData] = useState([]);

	useEffect(() => {
		const getNewsData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("news") //henter fra tabellen news
						.select("*, images(filename)"); // henter alle kolonner fra tabellen og filename fra images fordi de har en  foreginkey

					if (error) {
						console.error(
							"Fejl ved hentning af data fra NewsData:",
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
