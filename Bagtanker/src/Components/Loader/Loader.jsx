import style from "./Loader.module.scss";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";

export const Loader = () => {
	return (
		<>
			<div className={style.loaderWrapper}>
				<p className={globalStyle.title}>Loader</p>
				<div className={style.loader}></div>
			</div>
		</>
	);
};
