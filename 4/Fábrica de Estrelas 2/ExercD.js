function Estrelas() {
  let inNLinhas = document.querySelector("#inNLinhas");
  let outResposta = document.querySelector("#outResposta");

  let nLinhas = Number(inNLinhas.value);
  let estrelas = "";
  let total = "";

  if (nLinhas === 0 || isNaN(nLinhas)) {
    alert("insira um valor válido");
    inNLinhas.focus();
    return;
  }
  for (let i = 1; i <= nLinhas; i++) {
    estrelas += "*";
    total += estrelas + "\n";
  }

  if (estrelas === Number) {
    total = "*";
  }

  outResposta.textContent = `${total}`;
}
let btResposta = document.querySelector("#btResposta");
btResposta.addEventListener("click", Estrelas);
