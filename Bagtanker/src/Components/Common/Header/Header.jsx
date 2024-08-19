import { useResizeHandler } from "../ResizeHandler";
import { DesktopHeader } from "./DesktopHeader";
import { MobilHeader2 } from "./MobilHeader2";
import globalstyle from "../../../Styles/GlobalStyles.module.scss";

export const Header = () => {
	const { width } = useResizeHandler();

	return (
		<header className={globalstyle.header}>
			<DesktopHeader></DesktopHeader>
			{/* Tjekker hvilken bredde browser vinduet har i px */}
			{/* {width <= 640 ? <MobilHeader2 /> : <DesktopHeader />} */}
		</header>
	);
};
