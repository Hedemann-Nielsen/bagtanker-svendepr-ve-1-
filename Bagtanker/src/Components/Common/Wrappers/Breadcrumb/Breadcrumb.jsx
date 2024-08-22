import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ items }) => {
	return (
		<nav className={styles.breadcrumb}>
			<span className={styles.currentLocation}>Du er her: </span>
			<ul>
				{items.map((item, index) => (
					<li key={index} className={styles.breadcrumbItem}>
						{index < items.length - 1 ? (
							<Link to={item.path}>{item.label}</Link>
						) : (
							<span>{item.label}</span>
						)}
						{index < items.length - 1 && (
							<span className={styles.separator}>/</span>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Breadcrumb;
