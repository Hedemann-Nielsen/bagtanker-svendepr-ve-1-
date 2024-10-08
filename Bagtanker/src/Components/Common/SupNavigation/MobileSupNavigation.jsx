import { NavLink } from "react-router-dom";
import { SubMenu } from "../../Static/MenuData";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

import style from "./SupNavigation.module.scss";

export const MobileSupNavigation = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<div className={style.mobilNavWrapper}>
				{/* brugermenu fra react npm pakke */}
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					rounded
					direction="right"
					color="#fff"
				/>

				<nav className={`${style.navMobilMenu} ${isOpen && style.activeMobil}`}>
					<ul>
						{SubMenu &&
							SubMenu.map((link) => {
								return (
									<li key={link.id}>
										<NavLink to={link.url} className={style.navText}>
											<span>{link.title}</span>
										</NavLink>
									</li>
								);
							})}
					</ul>
				</nav>
			</div>
		</>
	);
};
