/*
## Snack2
Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/
const squadreCalcio = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 }
];

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Logica
for (let squadra of squadreCalcio) {
  squadra.puntiFatti = generateRandomNumber(0, 114);
  squadra.falliSubiti = generateRandomNumber(400, 700);
}
const squadreInfo = [];
// Output
for (let squadra of squadreCalcio) {
  squadreInfo.push({
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti
  })
}

console.log(squadreInfo);

