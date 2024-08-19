import { Outlet, useLocation } from "react-router-dom";
import { CookieBanner } from "../CookieBanner/CookieBanner.jsx";
import { Footer } from "../Common/Footer/Footer.jsx";
import { Header } from "../Common/Header/Header.jsx";
import { Hero } from "../Common/Hero/Hero.jsx";

import { InnerWrapper } from "../Common/Wrappers/InnerWrapper.jsx";

export const Layout = () => {
	const location = useLocation();
	const currentPage = location.pathname.substring(1);

	return (
		<>
			<Header />
			{/* viser et billede ud fra hvilken side brugeren ser på */}
			<Hero currentPage={currentPage} />

			<InnerWrapper>
				<Outlet />
			</InnerWrapper>
			{/* cookie banneret vises kun på siden, hvis der ikke er registreret om cookies må gemmes eller ej i localStorage */}
			<CookieBanner />
			<Footer />
		</>
	);
};
