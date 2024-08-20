import { NavLink } from "react-router-dom";
import { MenuData } from "../../Static/MenuData.jsx";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

import style from "./HeaderStyle.module.scss";

export const BurgerMenu = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<Hamburger
				toggled={isOpen}
				toggle={setOpen}
				rounded
				direction="right"
				color="#ffffff"
			/>

			<nav className={`${style.navMenu} ${isOpen && style.active}`}>
				<ul>
					<li className={style.rightAlign}>
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							rounded
							direction="right"
							className={style.hamburger}
							color="#ffffff"
						/>
					</li>
					{MenuData &&
						MenuData.map((item, index) => {
							return (
								<>
									<li key={index}>
										<NavLink
											to={item.url}
											onClick={() => setMobileMenuIsActive(!mobileMenuIsActive)}
											className={style.navText}>
											<span>{item.title}</span>
										</NavLink>
									</li>
								</>
							);
						})}
				</ul>
			</nav>
		</>
	);
};
