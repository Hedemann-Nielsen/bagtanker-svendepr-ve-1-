import style from "./HeaderStyle.module.scss";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { MenuData } from "./MenuData.jsx";

export const MobilHeader = () => {
	const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);
	return (
		<>
			<div className={style.mobilWrapper}>
				<div className={style.mobilHeader}>
					<Link to="/home">
						<h1 className={globalStyle.title}>MedieSuset</h1>
					</Link>
					<Link
						onClick={() => setMobileMenuIsActive(!mobileMenuIsActive)}
						className={style.burgermenu}>
						<IoMenu />
					</Link>
				</div>
				<nav
					className={`${style.navMenu} ${mobileMenuIsActive && style.active}`}>
					<ul>
						<li>
							<Link
								to="#"
								onClick={() => setMobileMenuIsActive(!mobileMenuIsActive)}>
								<IoClose className={style.IoClose} />
							</Link>
						</li>
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
