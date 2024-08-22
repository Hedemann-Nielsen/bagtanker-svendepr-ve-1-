import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useCategorysAndProductsData = () => {
	const { supabase } = useSupabase();
	const [categorysAndProductsData, setCategorysAndProductsData] = useState([]);

	useEffect(() => {
		const getCategorysAndProductsData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("category_product_rel") //henter fra relastionstabellen
						.select(
							"product_id(id, title, teaser, slug, image_id(filename)), category_id(title)"
						);
					// henter created_at, title, teaser, fra tabellen og filename fra images fordi de har en  foreginkey

					if (error) {
						console.error(
							"Fejl ved hentning af data fra Categorys_product_rel:",
							error.message
						);
					} else {
						setCategorysAndProductsData(data);
						// console.log("Hentede news teaser data:", data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getCategorysAndProductsData();
	}, [supabase]);

	return categorysAndProductsData;
};
