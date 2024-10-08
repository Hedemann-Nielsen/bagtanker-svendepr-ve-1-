import React, { useState, useEffect } from "react";
import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { useParams } from "react-router-dom";
import style from "./Product.module.scss";
import { Recipe } from "./Recipe.jsx";
import { Comments } from "./Comments.jsx";

export const Product = () => {
	const { slug } = useParams(); // Hent slug fra URL'en
	const { supabase } = useSupabase();
	const [product, setProduct] = useState(null);

	// console.log(slug);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const { data, error } = await supabase
					.from("products") // Navn på din tabel
					.select("image_id(filename), *")
					.eq("slug", slug) // Filtrér efter slug
					.single(); // Forventer kun ét produkt

				if (error) {
					console.error("Fejl ved hentning af produkt:", error.message);
				} else {
					setProduct(data);
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		if (slug) {
			fetchProduct();
		}
	}, [slug, supabase]);

	console.log(product, "produkt");

	return (
		<PageWrapper title={product?.title}>
			{product ? (
				<div className={style.productWrapper}>
					<div className={style.productDetails}>
						<div className={style.productTopGrid}>
							<img src={product.image_id?.filename} alt={product.title} />
							<p>{product.teaser}</p>
						</div>
						<p className={style.description}>{product.description}</p>
						<p className={style.price}>Pris: {product.price},00 DKK</p>
						<div className={style.likeWrapper}></div>
					</div>

					<Recipe product={product} productId={product.id} />
					<Comments product_ID={product.id} />
				</div>
			) : (
				<p>Produktet blev ikke fundet.</p>
			)}
		</PageWrapper>
	);
};
