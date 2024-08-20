import { useResizeHandler } from "../Common/ResizeHandler.jsx";

import { CookieBanner } from "../CookieBanner/CookieBanner";
import { HomeHeader } from "./HomeHeader.jsx";
import { SlideShow } from "../Customers/Home/SlideShow";
import { NewsTeaser } from "../Customers/News/NewsTeaser.jsx";
import { MobilNewsTeaser } from "../Customers/News/MobilNewsTeaser.jsx";

import style from "./HomeLayout.module.scss";
export const HomeLayout = () => {
	const { width } = useResizeHandler();
	// console.log(width);

	return (
		<div className={style.homeLayout}>
			<HomeHeader />
			{/* {width <= 768 ? <MobilNewsTeaser /> : <NewsTeaser />} */}
			<NewsTeaser />
			<SlideShow />
			{/* cookie banneret vises kun på siden, hvis der ikke er registreret om cookies må gemmes eller ej i localStorage */}
			<CookieBanner />
		</div>
	);
};
