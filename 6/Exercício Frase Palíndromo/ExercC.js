function Palindromo() {
  let inFrase = document.querySelector("#inFrase");
  let frase = inFrase.value.toUpperCase();
  console.log(frase);
  let dados = "";
  let dados2 = "";

  if (frase == "" || frase.indexOf(" ") == -1) {
    alert("Informe, por favor, uma frase");
    inFrase.focus();
    return;
  }

  for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) !== " ") dados2 += frase.charAt(i);
  }

  for (let i = frase.length; i >= 0; i--) {
    if (frase.charAt(i) !== " ") dados += frase.charAt(i);
  }
  if (dados == dados2) {
    document.querySelector(
      "#outResposta"
    ).textContent = `${frase} é um Palíndromo`;
  } else {
    document.querySelector(
      "#outResposta"
    ).textContent = `${frase} não é um Palíndromo`;
  }

  console.log(dados);
  console.log(dados2);
}
document.querySelector("#btResposta").addEventListener("click", Palindromo);
// ame o poema
