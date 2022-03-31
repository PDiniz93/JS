//operadores aritmeticos, atribuição, comparação, lógicos, bitwise

//aritméticos

let salario = 100;
console.log(salario+salario);
console.log(salario-salario);
console.log(salario*salario);
console.log(salario/salario); 
console.log(salario**salario);

let idade = 18;
idade ++; //incremento
console.log(idade);

let idade2 = 20;
idade2 --; //decremento
console.log(idade2);
 

//atribuição
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer; //var = var + var
console.log(valorTecladoGamer);

//igualdade === compara tipo e valor, == compara apenas valor, 3 iguais é mais indicado, e da menos erros.

console.log(1 === 1); //true
console.log("1" === 1); //false
console.log(1 == 1); //true
console.log("1" == 1); //true 

//operador ternário for maior que 100 é premium, menor ou igual comum

let pontos = 200;
let tipo =  pontos > 100 
console.log(tipo);

//Operador lógico E(&&)  VV=V / OU(||) VF=V / NOT(!) 
let maiorDeIdade = true;
let possuiCarteira = true;
console.log(maiorDeIdade && possuiCarteira);



