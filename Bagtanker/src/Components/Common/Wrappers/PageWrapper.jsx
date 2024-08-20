import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import Breadcrumb from "../Breadcrumb";
import { useLocation } from "react-router-dom";

export const PageWrapper = ({ title, children }) => {
	// Sætter page title
	document.title = title;
	const location = useLocation();

	// Funktion til at generere breadcrumb-items baseret på den aktuelle sti
	const generateBreadcrumbItems = () => {
		const paths = location.pathname.split("/").filter((path) => path); // Splitter stien og fjerner tomme elementer
		const breadcrumbItems = paths.map((path, index) => {
			const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
			return {
				label: path.charAt(0).toUpperCase() + path.slice(1), // Gør første bogstav stort
				path: fullPath,
			};
		});

		// Tilføj en "Home" eller startside på toppen af breadcrumbs
		return [{ label: "Home", path: "/" }, ...breadcrumbItems];
	};

	const breadcrumbItems = generateBreadcrumbItems();

	return (
		<section className={globalStyle.pageWrapper}>
			<Breadcrumb items={breadcrumbItems} />
			<h1 className={globalStyle.title}>{title}</h1>
			{children}
		</section>
	);
};
