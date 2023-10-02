function SenhaInicial() {
  let inNome = document.querySelector("#inNome");
  let outResposta = document.querySelector("#outResposta");

  let nome = inNome.value;
  let validador = ValidarNome(nome);

  if (nome == "" || !validador) {
    alert("Insira Nome Completo");
    inNome.focus();
    return;
  }
  let sobrenome = ObterSobreNome(nome);
  let vogais = ContarVogais(nome);

  console.log("entrei");
  ContarVogais(nome);

  outResposta.textContent = `Senha Inicial: ${sobrenome}${vogais}`;
}
document.querySelector("#btResposta").addEventListener("click", SenhaInicial);

function ValidarNome(nome) {
  if (nome.indexOf(" ") >= 1) {
    return true;
  } else {
    return false;
  }
}

function ObterSobreNome(nome) {
  let copiaNome = nome.split(" ");

  let sobrenome = copiaNome[copiaNome.length - 1].toLowerCase();
  console.log(sobrenome);
  return sobrenome;
}

function ContarVogais(nome) {
  let contador = 0;
  for (let i = 0; i < nome.length; i++) {
    let vogais = nome.charAt(i).toUpperCase();
    if (
      vogais == "A" ||
      vogais == "E" ||
      vogais == "I" ||
      vogais == "O" ||
      vogais == "U"
    ) {
      contador++;
    }
  }

  return contador < 10 ? "0" + contador : contador;
  console.log(contador);
}
// Simone Costa Martins
