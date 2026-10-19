let jogos = [
"Minecraft",
"The Sims",
"Roblox",
"Terraria",
"Stardew Valley"
];
let pesquisaJogos = prompt ("Qual jogo você procura? ");

if(pesquisaJogos === " "){
    console.log("Busca incompleta. Digite o nome do jogo que deseja!");
}

else{
   
    let jogo = jogos.find(jogo =>
        jogo.toLowerCase().includes(pesquisaJogos.toLowerCase().trim())
    );
    if (pesquisaJogos) {
        console.log("Jogo encontrado: " + pesquisaJogos);
    } else {
        console.log("Nenhum jogo encontrado com esse nome.");
    }
   }
   