export const qualificationInToGrades = num => {
    if (num < 0) return `"${num}", no es una nota válida`;
	if (num > 10) return `"${num}", no es una nota válida`;
	if (num <= 3) return "Muy deficiente";
	if (num < 5) return "Insuficiente";
	if (num <= 6) return "Suficiente";
	if (num <= 8) return "Notable";
	if (num <= 10) return "Sobresaliente";

};