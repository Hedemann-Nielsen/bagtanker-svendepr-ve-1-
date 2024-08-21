import { NavLink } from "react-router-dom";
import { SubMenu } from "../../Static/MenuData";

import style from "./SupNavigation.module.scss";

export const SupNavigation = () => {
	return (
		<nav className={style.supNavigation}>
			<ul>
				{SubMenu.map((link) => (
					<li key={link.url}>
						<NavLink
							to={link.url}
							className={({ isActive }) => (isActive ? style.active : "")}>
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
