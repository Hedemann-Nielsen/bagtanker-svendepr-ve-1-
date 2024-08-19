import style from "./HeaderStyle.module.scss";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { MenuData } from "../../Static/MenuData.jsx";
import { Fade as Hamburger } from "hamburger-react";

export const MobilHeader2 = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<div className={style.mobilWrapper}>
				<div className={style.mobilHeader}>
					<Link to="/home">
						<h1 className={globalStyle.title}>MedieSuset</h1>
					</Link>
					<Hamburger
						toggled={isOpen}
						toggle={setOpen}
						rounded
						direction="right"
					/>
				</div>
				<nav className={`${style.navMenu} ${isOpen && style.active}`}>
					<ul>
						{MenuData &&
							MenuData.map((item, index) => {
								return (
									<li key={index}>
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
			</div>
		</>
	);
};
