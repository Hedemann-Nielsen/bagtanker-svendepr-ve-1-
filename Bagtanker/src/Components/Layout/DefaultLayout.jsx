import { Outlet, useLocation } from "react-router-dom";
import { CookieBanner } from "../CookieBanner/CookieBanner.jsx";
import { Footer } from "../Common/Footer/Footer.jsx";
import { Header } from "../Common/Header/Header.jsx";

import { InnerWrapper } from "../Common/Wrappers/InnerWrapper.jsx";

export const DefaultLayout = () => {
	return (
		<>
			<Header />
			<InnerWrapper>
				<Outlet />
			</InnerWrapper>
			{/* cookie banneret vises kun på siden, hvis der ikke er registreret om cookies må gemmes eller ej i localStorage */}
			<CookieBanner />
			<Footer />
		</>
	);
};
