import { Link, useParams } from "react-router-dom";
import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useCategorysAndProductsData } from "../../Hooks/CategorysAndProductsData";
import { CounterButton } from "../../CounterButton/CounterButton";
import { convertLetters } from "../../Utils/convertLetters";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Categorys.module.scss";

export const Categorys = () => {
	const { katogori } = useParams(); // Hent den valgte kategori fra URL'en
	const categorysAndProductsData = useCategorysAndProductsData();

	// console.log(categorysAndProductsData, "fetch kald");

	// Filtrering af kategorier og produkter baseret på den valgte kategori
	const filteredCategories = categorysAndProductsData.filter(
		(item) => convertLetters(item.category_id.title) === katogori
	);

	return (
		<PageWrapper title={katogori}>
			<div className={style.productsWrapper}>
				{filteredCategories.length > 0 ? (
					filteredCategories.map((product, index) => {
						// const productTitleURL = convertLetters(product.products.title);

						return (
							<figure key={index} className={style.product}>
								<img
									src={product.product_id.image_id.filename}
									alt={product.product_id.title}
								/>
								<figcaption>
									<div className={style.productInfo}>
										<h2>{product.product_id.title}</h2>
										<p>{product.product_id.teaser}</p>
									</div>
									<div className={style.buttonWrapper}>
										<Link
											to={`/katogori/${katogori}/${product.product_id.slug}`}
											className={globalStyle.goldButton}>
											Læs mere
										</Link>
										<div className={style.likeWrapper}>
											<CounterButton productId={product.product_id.id} />
										</div>
									</div>
								</figcaption>
							</figure>
						);
					})
				) : (
					<p>Der er ingen produkter i denne kategori.</p>
				)}
			</div>
		</PageWrapper>
	);
};
