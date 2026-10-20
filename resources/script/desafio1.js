
const senhaUsuario = "QNMTCU";
const limiteTentativas = 3;
let tentativas = 0;
let senhaDigitada = "";



while (tentativas < limiteTentativas && !acessoLiberado) {
    senhaDigitada = prompt("Digite a senha:"); 
    tentativas++;

    if (senhaDigitada === senhaUsuario) {
        console.log("Acesso liberado!");
    } else {
        console.log(`Tentativa ${tentativas}: senha incorreta.`);
    }
}

if (!acessoLiberado) {
    console.log("Acesso negado!");
}
