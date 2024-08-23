import { useEffect, useState } from "react";
import style from "./SlideShow.module.scss";
import slide1 from "../../../Assets/slide/bread-full04.jpeg";
import slide2 from "../../../Assets/slide/bread-full10.jpeg";
import slide3 from "../../../Assets/slide/bread-full09.jpeg";
import slide4 from "../../../Assets/slide/bread-full05.jpeg";
import slide5 from "../../../Assets/slide/bread-full06.jpeg";

const images = [slide1, slide2, slide3, slide4, slide5];

export const SlideShow = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className={style.slideshow}>
			{/* looper iggenem arrayet af billder (images)*/}
			{images &&
				images.map((image, index) => (
					<div
						key={index}
						className={`${style.slide} ${
							index === currentIndex && style.active
						}`}
						style={{ backgroundImage: `url(${image})` }}></div>
				))}
			{/* placere en dot for hvert billede, som også henviser til billedet */}
			<div className={style.dots}>
				{images &&
					images.map((_, index) => (
						<span
							key={index}
							className={`${style.dot} ${
								index === currentIndex && style.active
							}`}
							onClick={() => setCurrentIndex(index)}></span>
					))}
			</div>
		</section>
	);
};
