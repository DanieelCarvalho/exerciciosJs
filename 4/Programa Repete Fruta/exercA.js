function RepeteFruta() {
  let inFruta = document.querySelector("#inFruta");
  let inNumero = document.querySelector("#inNumero");
  let outFruta = document.querySelector("#outFruta");

  let fruta = inFruta.value;
  let numero = Number(inNumero.value);
  let repeticao = "";

  if (fruta === "" || isNaN(numero)) {
    alert("preencha o campo corretamente");
    inFruta.focus();
    return;
  }

  for (let i = 1; i <= numero; i++) {
    repeticao += fruta + " * ";
  }
  outFruta.textContent = repeticao.substring(0, repeticao.length - 2);
}
let btResposta = document.querySelector("#btResposta");
btResposta.addEventListener("click", RepeteFruta);
