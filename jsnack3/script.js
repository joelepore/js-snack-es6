/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

// Funzione che simula lo slice nativo di javascript, con la differenza che restituisce un array compreso tra due estremi, estremi inclusi
const mySlice = (arr, a, b) => {
  const newArray = [];

  // se a e' maggiore di b, restituisco null
  if (a > b) {
    newArray = null;
  } else {
    for (let i = a; i <= b; i++) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

const colori = ['Giallo', 'Rosso', 'Blu', 'Verde', 'Nero'];

console.log(mySlice(colori, 1, 3));