import style from "./HeaderStyle.module.scss";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import { IoSearch } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { MenuData } from "./MenuData.jsx";

export const DesktopHeader = () => {
	return (
		<div className={style.desktopWrapper}>
			<Link to="/home">
				<h1 className={globalStyle.title}>MedieSuset</h1>
			</Link>

			<ul>
				{/* Kontrollerer om MenuData eksisterer og bruger map funktionen til at generere nye elementer fra arrayet */}
				{MenuData &&
					MenuData.map((item, index) => {
						return (
							<li key={index}>
								<NavLink to={item.url}>
									<span>{item.title}</span>
								</NavLink>
							</li>
						);
					})}
				<li>
					<IoSearch className={style.IoSearch} />
				</li>
			</ul>
		</div>
	);
};
