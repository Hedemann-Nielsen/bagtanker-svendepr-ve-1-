import { useResizeHandler } from "../Common/ResizeHandler.jsx";

import { CookieBanner } from "../CookieBanner/CookieBanner";
import { HomeHeader } from "../Common/Header/HomeHeader.jsx";
import { SlideShow } from "../Customers/Home/SlideShow";
import { NewsTeaser } from "../Customers/News/NewsTeaser.jsx";

export const HomeLayout = () => {
	return (
		<>
			<HomeHeader />
			<SlideShow />
			<NewsTeaser />
			{/* cookie banneret vises kun på siden, hvis der ikke er registreret om cookies må gemmes eller ej i localStorage */}
			<CookieBanner />
		</>
	);
};
