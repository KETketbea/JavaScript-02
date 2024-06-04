// pop() remove o último elemento do array.
// push() insere um elemento no final do array.

let alunos = ['gustavo','bia','fabiano']
console.log(alunos);

console.log("--- --- --- ---");

let nome1 = alunos.pop();
console.log(alunos);
console.log(nome1);

console.log("--- --- --- ---");
alunos.push('guilherme')
console.log(alunos);

console.log("--- --- --- ---");
//shift() remove o elemento no início do array.
//unshift() insere um elemento no início do array

let nome2 = alunos.shift()
alunos.unshift(`davi`)
console.log(alunos);