import { NavLink } from "react-router-dom";
import { SubMenu } from "../../Static/MenuData";

import style from "./SupNavigation.module.scss";

export const SupNavigation = () => {
	return (
		<nav className={style.supNavigation}>
			<ul>
				{/* henter data til menuen fra en statisk menu side. De hentes ikke fra databsen, for at jeg lettere kunne styre breadcrump delen */}
				{SubMenu.map((link) => (
					<li key={link.url}>
						<NavLink
							to={link.url}
							className={({ isActive }) =>
								isActive ? `${style.active} ${style.activeLink}` : ""
							}>
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
