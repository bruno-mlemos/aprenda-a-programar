let produtoA = {nome: "camiseta", valor: 100.00, internacional: true};
let produtoB = {nome: "perfume", valor: 200.00, internacional: true};
let produtoC = {nome: "sandália", valor: 120.00, internacional: false};

let valorA  = 0;
let valorB = 0;
let valorC = 0;


if(produtoA.internacional== true){
    valorA = produtoA.valor*1.2;
}else{
    valorA = produtoA.valor*1.12;
}
console.log (`O valor do produto "${produtoA.nome}" é de ${valorA} reais `);

if(produtoB.internacional== true){
    valorB = produtoB.valor*1.2;
}else{
    valorB = produtoB.valor*1.12;
}
console.log (`O valor do produto "${produtoB.nome}" é de ${valorB} reais `);

if(produtoC.internacional== true){
    valorC = produtoC.valor*1.2;
}else{
    valorC = produtoC.valor*1.12;
}
console.log (`O valor do produto "${produtoC.nome}" é de ${valorC} reais `);