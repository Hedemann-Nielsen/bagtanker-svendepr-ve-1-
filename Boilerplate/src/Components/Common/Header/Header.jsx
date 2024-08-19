import { useResizeHandler } from "../ResizeHandler";
import { DesktopHeader } from "./DesktopHeader";
import { MobilHeader2 } from "./MobilHeader2";

export const Header = () => {
	const { width } = useResizeHandler();

	// console.log(width);

	return (
		<header>
			{/* Tjekker hvilken bredde browser vinduet har i px */}
			{width <= 640 ? <MobilHeader2 /> : <DesktopHeader />}
		</header>
	);
};
