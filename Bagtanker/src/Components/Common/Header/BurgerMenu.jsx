import { NavLink } from "react-router-dom";
import { MenuData } from "../../Static/MenuData.jsx";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

import style from "./HeaderStyle.module.scss";

export const BurgerMenu = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			{/* Burgemenu på siden kommer fra en npm pakke  */}
			<Hamburger
				toggled={isOpen}
				toggle={setOpen}
				rounded
				direction="right"
				color="#ffffff"
			/>

			<nav className={`${style.navMenu} ${isOpen && style.active}`}>
				<ul>
					<li key="0">
						{/* Burgermenu på menuen, de 2 menuer har samme toggle navne, så de køre samtifig. Burgermenuen på siden vil være skjult af menuen som ligger ovenpå siden. */}
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							rounded
							direction="right"
							color="#ffffff"
						/>
					</li>
					{MenuData &&
						MenuData.map((item) => {
							return (
								<li key={item.id}>
									<NavLink
										to={item.url}
										onClick={() => setMobileMenuIsActive(!mobileMenuIsActive)}
										className={style.navText}>
										<span>{item.title}</span>
									</NavLink>
								</li>
							);
						})}
				</ul>
			</nav>
		</>
	);
};
