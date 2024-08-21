export const convertLetters = (title) => {
	const result = title;

	return title
		.toLowerCase() // Gør titlen lille
		.normalize("NFD") // Normaliserer tegnsæt
		.replace(/[\u0300-\u036f]/g, "") // Fjern diakritiske tegn
		.replace(/ø/g, "o") // Erstat Ø med o
		.replace(/[^a-z0-9]+/g, "-") // Erstat ikke-alfanumeriske tegn med -
		.replace(/^-+|-+$/g, ""); // Fjern - i starten og slutningen

	console.log(result); // For debugging
	return result;
};
