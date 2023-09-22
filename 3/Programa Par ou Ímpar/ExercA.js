function ParOuImpar() {
  let inNumero = document.querySelector("#inNumero");
  let outResultado = document.querySelector("#outResultado");

  let num = Number(inNumero.value);
  let resposta = "";

  if (num % 2 === 0) {
    resposta = "Par";
  } else {
    resposta = "Ímpar";
  }

  outResultado.textContent = `Respota: ${num} é ${resposta}`;
}

let btResposta = document.querySelector("#btResposta");
btResposta.addEventListener("click", ParOuImpar);
