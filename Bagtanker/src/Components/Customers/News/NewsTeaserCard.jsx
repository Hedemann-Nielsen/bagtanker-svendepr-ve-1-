import style from "./NewsTeaser.module.scss";

// Funktion til at formatere datoen
const formatDate = (dateString) => {
	const date = new Date(dateString);
	return new Intl.DateTimeFormat("da-DK", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(date);
};

export const NewsTeaserCard = ({ newsTeaser }) => {
	console.log(newsTeaser);

	// Hent billednavnet med filtypenavn
	const fullFileName = newsTeaser.images.filename.substring(
		newsTeaser.images.filename.lastIndexOf("/") + 1
	);

	// Fjern filtypenavnet (.jpg eller lignende)
	const fileNameWithoutExtension = fullFileName
		.split(".")
		.slice(0, -1)
		.join(".");

	console.log(fileNameWithoutExtension);

	return (
		<figure className={style.newsTeaserCard}>
			<img src={newsTeaser.images.filename} alt={fileNameWithoutExtension} />
			<figcaption>
				<h2>{formatDate(newsTeaser.created_at)}</h2>
				<h3>{newsTeaser.title}</h3>
				<p>{newsTeaser.teaser}</p>
			</figcaption>
		</figure>
	);
};
