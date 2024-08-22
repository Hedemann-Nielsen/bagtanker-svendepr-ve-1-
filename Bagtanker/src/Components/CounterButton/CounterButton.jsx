import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useSupabase } from "../../Providers/SupabaseProvider";

import style from "./CounterButton.module.scss";

export const CounterButton = ({ productId }) => {
	const [count, setCount] = useState(0);
	const { supabase } = useSupabase();

	// Hent det aktuelle like fra API'et
	useEffect(() => {
		const fetchCount = async () => {
			try {
				const { data, error } = await supabase
					.from("products") // Henter fra tabellen products
					.select("likes") //finder kolonnen likes
					.eq("id", productId) //finder det id i kolonne id hvor productId matcher
					.single(); // Forventer kun der kommer et resultat

				if (error) {
					console.error("Fejl ved hentning af likes:", error.message);
				} else {
					// Hvis data returnerer 'null', sættes count til 0
					setCount(data?.likes ?? 0);
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		fetchCount();
	}, [productId, supabase]);

	// Funktion til at håndtere klik og opdatere likes
	const handleClick = async () => {
		// reistrer hvor mange likes der er i forvejen og lægger 1 til
		const newCount = count + 1;
		setCount(newCount);

		// Opdater likes på serveren
		try {
			const { error } = await supabase
				.from("products")
				.update({ likes: newCount }) // Opdater Likes kolonnen
				.eq("id", productId);

			if (error) {
				console.error("Fejl ved opdatering af likes:", error.message);
			}
		} catch (error) {
			console.error("Generel fejl:", error.message);
		}
	};

	return (
		<div className={style.likeWrapper}>
			<p>{count}</p>
			<button onClick={handleClick}>
				<CiHeart className={style.CiHeart} />
			</button>
		</div>
	);
};
