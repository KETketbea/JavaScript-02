// RH,nome,idade,grade:tecnologia, adiministração, comunicação

let aluno1 = {
    RA:20240101,
    Nome:'Ketleen',
    Idade:18,
    Grade:{
        Curso:'comunicação',
        Ch:200,
        Matriculado:true 
    }
}

 console.log(aluno1);
 console.log(aluno1.Nome);

let { RA, Nome, Idade } = aluno1 

console.log(aluno1.Nome);
console.log(Nome.toUpperCase);



