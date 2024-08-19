import globalStyle from "../../../Styles/GlobalStyles.module.scss";

export const Hero = ({ title }) => {
	const title = {
		artisDetails: "hero2",
		buyTickets: "hero3",
		camps: "hero3",
		home: "hero1",
		info: "hero1",
		lineup: "hero2",
		login: "hero1",
		mySite: "hero1",
		program: "hero2",
		ticketsOverview: "hero3",
	};

	const imageUrl = title[currentPage] || "hero1";

	return (
		<div className={globalStyle.hero}>
			<img src={imageUrl} alt="" />
		</div>
	);
};
