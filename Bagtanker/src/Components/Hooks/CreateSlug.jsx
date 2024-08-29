import React, { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

const convertLetters = (title) => {
	return title
		.toLowerCase()
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/æ/g, "ae")
		.replace(/ø/g, "oe")
		.replace(/å/g, "aa")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
};

export const UpdateProductSlugs = () => {
	const { supabase } = useSupabase(); // Hent Supabase-instansen fra din provider
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchAndConvertProducts = async () => {
			try {
				// Hent alle produkter med title og id
				const { data: products, error: fetchError } = await supabase
					.from("products2")
					.select("id, title");

				if (fetchError) {
					console.error("Fejl ved hentning af produkter:", fetchError.message);
					return;
				}

				// Filtrér produkter for at undgå dubletter
				const uniqueProducts = Array.from(
					new Map(products.map((product) => [product.id, product])).values()
				);

				// Opdater hvert produkt med den genererede slug
				const updates = uniqueProducts.map(async (product) => {
					const slug = convertLetters(product.title);

					// Tjek om slug allerede findes i databasen for at undgå unødvendige opdateringer
					if (product.slug !== slug) {
						const { error: updateError } = await supabase
							.from("products2")
							.update({ slug })
							.eq("id", product.id);

						if (updateError) {
							console.error(
								`Fejl ved opdatering af slug for produkt ${product.id}:`,
								updateError.message
							);
						} else {
							console.log(`Produkt ${product.id} opdateret med slug: ${slug}`);
						}
					}
				});

				await Promise.all(updates);

				// Opdater state med de nyeste produkter (inkl. nye slugs)
				setProducts(uniqueProducts);
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		fetchAndConvertProducts();
	}, [supabase]);

	return (
		<div>
			<h1>Opdatering af Produkt Slugs</h1>
			{products.length > 0 ? (
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							{product.title} - Slug: {convertLetters(product.title)}
						</li>
					))}
				</ul>
			) : (
				<p>Indlæser produkter...</p>
			)}
		</div>
	);
};
