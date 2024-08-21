import { Outlet, useLocation } from "react-router-dom";
import { CookieBanner } from "../CookieBanner/CookieBanner.jsx";
import { Footer } from "../Common/Footer/Footer.jsx";
import { Header } from "../Common/Header/Header.jsx";
import { SupNavigation } from "../Common/SupNavigation/SupNavigation.jsx";
import { InnerWrapper } from "../Common/Wrappers/InnerWrapper.jsx";

export const DefaultLayout = () => {
	return (
		<>
			<Header />
			<SupNavigation />
			<InnerWrapper>
				<Outlet />
			</InnerWrapper>
			{/* cookie banneret vises kun på siden, hvis der ikke er registreret om cookies må gemmes eller ej i localStorage */}
			<CookieBanner />
			<Footer />
		</>
	);
};
