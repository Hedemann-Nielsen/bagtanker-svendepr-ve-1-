import style from "./SupNavigation.module.scss";

//bruges til undernavigation på nogle sider

export const SupNavigation = ({ SubNavItems }) => {
	return (
		<nav className={style.supNavigation}>
			<ul>
				{SubNavItems.map((item, index) => (
					<li key={index}>
						<a href={item.link}>{item.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
