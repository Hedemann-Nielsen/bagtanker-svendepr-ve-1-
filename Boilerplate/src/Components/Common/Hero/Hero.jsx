import hero1 from "../../../Assets/HeroImages/Hero1.png";
import hero2 from "../../../Assets/HeroImages/Hero2.png";
import hero3 from "../../../Assets/HeroImages/Hero3.png";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";

//viser et billede baseret på den aktuelle side (currentPage) hvis siden ikke har fået deffineret et billede, vises billedet med navnet hero1

export const Hero = ({ currentPage }) => {
	const pageImages = {
		artisDetails: hero2,
		buyTickets: hero3,
		camps: hero3,
		home: hero1,
		info: hero1,
		lineup: hero2,
		login: hero1,
		mySite: hero1,
		program: hero2,
		ticketsOverview: hero3,
	};

	const imageUrl = pageImages[currentPage] || hero1;

	return (
		<div className={globalStyle.hero}>
			<img src={imageUrl} alt="" />
		</div>
	);
};
