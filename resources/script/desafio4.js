let livros = [
    "Quinze Dias",
    "O Pequeno Príncipe",
    "Dom Casmurro",
    "Heartstopper",
    "Conectadas"
];

let livro = prompt("Informe o livro que deseja verificar:");

let posicao = livros.findIndex(function(item) {
    return item.toLowerCase() === livro.trim().toLowerCase();
});

if (posicao === -1) {
    console.log("Livro não encontrado.");
} else {
    console.log("Livro encontrado na posição " + posicao + ".");
}
