// NUMERO PRIMO

let n = 1500450271;

for(i=2; i<n; i++) {
    if(n%i == 0){
        console.log (`Não, o número ${n} não é primo`);
        i = n;
    } 
}
if (i == n){
    console.log (`Sim, o número ${n} é primo`);
}