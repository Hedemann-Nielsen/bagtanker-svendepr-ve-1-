import style from "./HeaderStyle.module.scss";
import logo from "../../../Assets/logo/Logo.png";
import { BurgerMenu } from "./BurgerMenu";
import { Link } from "react-router-dom";

export const DesktopHeader = () => {
	return (
		<div className={style.desktopWrapper}>
			<Link to="/home">
				<img src={logo}></img>
			</Link>
			<BurgerMenu />
		</div>
	);
};
