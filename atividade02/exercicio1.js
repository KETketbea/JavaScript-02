let Nomes = [];

do {
    let nome = prompt("Digite um ome:");
    Nomes.push(nome);
    let continuar = prompt("Deseja digitar mais um nome? (sim/não)").toLowerCase();
} while (continuar === "sim");

for (let i = 0; i < Nomes.length; i++) {
    console.log(Nomes[i]);
}