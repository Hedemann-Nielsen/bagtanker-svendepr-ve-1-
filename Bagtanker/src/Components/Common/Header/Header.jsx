import { useResizeHandler } from "../ResizeHandler";
import { DesktopHeader } from "./DesktopHeader";

import globalstyle from "../../../Styles/GlobalStyles.module.scss";

export const Header = () => {
	const { width } = useResizeHandler();

	return (
		<header className={globalstyle.header}>
			<DesktopHeader></DesktopHeader>
		</header>
	);
};
