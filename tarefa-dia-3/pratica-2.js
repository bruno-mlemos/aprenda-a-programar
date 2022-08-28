//TABUADA

let n = 9;
let contador = 0;
let multiplicador = 1;

console.log("\nTABUADA DE 9\n");

while (contador <= 10){
    multiplicador = contador*n;
    console.log(`${n} x ${contador} = ${multiplicador}`);
    contador++; 
}