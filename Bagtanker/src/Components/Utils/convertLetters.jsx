export const convertLetters = (title) => {
	return title
		.toLowerCase() // Ændre til små bogstaver
		.replace(/[\u0300-\u036f]/g, "") // Fjern underlige tegn
		.replace(/æ/g, "ae") // Erstat 'æ' med 'ae'
		.replace(/ø/g, "oe") // Erstat 'ø' med 'oe'
		.replace(/å/g, "aa") // Erstat 'å' med 'aa'
		.replace(/[^a-z0-9]+/g, "-") // Erstat ikke-alfanumeriske tegn med '-'
		.replace(/^-+|-+$/g, ""); // Fjern '-' i starten og slutningen
};
