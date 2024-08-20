import logo from "../../Assets/logo/Logo.png";
import { BurgerMenu } from "../Common/Header/BurgerMenu";

import style from "./HomeLayout.module.scss";

export const HomeHeader = () => {
	return (
		<div className={style.homeHeader}>
			<img src={logo} alt="logo" />
			<BurgerMenu />
		</div>
	);
};
