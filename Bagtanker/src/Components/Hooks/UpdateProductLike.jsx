import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const updateProductLike = () => {
	const { supabase } = useSupabase();
	const [productLikeData, setProductLikeData] = useState([]);

	useEffect(() => {
		const postupdateProductLikeData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("products") // Navn på tabellen, som indeholder produkterne
						.insert({ newCount: Likes }) // Opdater Likes kolonnen (post)
						.eq("id", productId); // Filtrér efter produkt_id

					if (error) {
						console.error(
							"Fejl ved hentning af data fra productLikeData:",
							error.message
						);
					} else {
						setProductLikeData(data);
						// console.log("Hentede news teaser data:", data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		postupdateProductLikeData();
	}, [supabase]);

	return productLikeData;
};
