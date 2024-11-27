/*
## Snack 1
Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore.
*/
const biciclette = [
  { nome: "Trek", peso: 8.5 },
  { nome: "Cannondale", peso: 9.2 },
  { nome: "Specialized", peso: 8.8 },
  { nome: "Bianchi", peso: 9.0 },
  { nome: "Scott", peso: 8.7 },
  { nome: "Giant", peso: 9.1 },
  { nome: "Pinarello", peso: 8.4 },
  { nome: "Cervélo", peso: 8.9 }
];
let biciLeggera = biciclette[0];

for (let bici of biciclette) {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
}

console.log(`La bici piu' leggera e' la ${biciLeggera.nome} con un peso di ${biciLeggera.peso}`);