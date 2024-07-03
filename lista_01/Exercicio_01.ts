const leia = require('readline-sync');

let cores =[];


for(let i = 0; i < 5; i++){
    let cor = leia.question(`Digite uma cor ${i + 1}`);
    cores.push(cor);
}

console.log("\nListar todas as cores:");
cores.forEach(cor => console.log(cor));

let coresOrdenadas = cores.sort();

console.log("\nOrdenar as cores:");
coresOrdenadas.forEach(cor => console.log(cor));
    

