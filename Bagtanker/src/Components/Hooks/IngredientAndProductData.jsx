import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useIngredientAndProductData = () => {
	const { supabase } = useSupabase();
	const [ingredientAndProductData, setIngredientAndProductData] = useState([]);

	useEffect(() => {
		const getIngredientAndProductData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("ingredient_product_rel") //henter fra relastionstabellen
						.select("product_id(*), ingredient_id(*), unit_id(*), *");
					// .select("*");
					// henter created_at, title, teaser, fra tabellen og filename fra images fordi de har en  foreginkey

					if (error) {
						console.error(
							"Fejl ved hentning af data fra ingredient_Product_rel:",
							error.message
						);
					} else {
						setIngredientAndProductData(data);
						// console.log("Hentede news teaser data:", data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getIngredientAndProductData();
	}, [supabase]);

	return ingredientAndProductData;
};
