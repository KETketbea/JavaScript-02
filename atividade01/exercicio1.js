let cachorro = ['Teddy','Looky','Max','Tjotta']
console.log(cachorro[0]);
console.log(cachorro[2]);


let cores = [
    ['azul','verde','vermelho'], //0
    ["amarelo", "preto","prata"], //1
    [`cinza `,` marrom`,`laranja`] //2
    // 0         1          2
]
// console.log(typeof cores);
console.log(cores[0][1]);
console.log(cores[0][0]);
console.log(cores[2][2]);

let cor1, cor2

cores[1][1] = 'ketleen'
cores[2][0] = 'guilherme'

cor1 = cores [1][1]
cor2 = cores [2][0]

console.log(cor1);
console.log(cor2);
console.log(cores);
