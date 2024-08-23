import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ items }) => {
	return (
		<nav className={styles.breadcrumb}>
			<p className={styles.currentLocation}>Du er her: </p>
			<ul>
				{/* dynamisk navigation hvor hver del af stien er et link undtagen den sidste  */}
				{items.map((item, index) => (
					<li key={index} className={styles.breadcrumbItem}>
						{index < items.length - 1 ? (
							<Link to={item.path}>{item.label}</Link>
						) : (
							<p className={styles.item}>{item.label}</p>
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
