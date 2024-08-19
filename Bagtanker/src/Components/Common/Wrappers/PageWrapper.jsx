import { PageWrapperSection } from "../../../Styles/StyledComponents";

export const PageWrapper = ({ title, breadcrumb, children }) => {
	// Sætter page title
	document.title = title;

	// Sætter page description hvis der en
	// if (description) {
	// 	document
	// 		.querySelector('meta[name="description"]')
	// 		.setAttribute("content", description);
	// }

	return (
		<PageWrapperSection>
			<h1>{title}</h1>
			{children}
		</PageWrapperSection>
	);
};
