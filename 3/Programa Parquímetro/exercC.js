function Parquimetro() {
  let inValor = document.querySelector("#inValor");
  let outTempo = document.querySelector("#outTempo");
  let outTroco = document.querySelector("#outTroco");

  let valor = Number(inValor.value);
  let tempo = Number;
  let troco = Number;

  if (valor == "" || isNaN(valor)) {
    alert("insira um valor");
    inValor.focus();
    return;
  }
  if (valor < 1.0) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)");
    inValor.focus();
    return;
  }

  if (valor >= 1 && valor < 1.75) {
    tempo = 30;
  } else if (valor >= 1.75 && valor < 3) {
    tempo = 60;
  } else if (valor >= 3) {
    tempo = 120;
  }

  if (tempo === 30 && valor >= 1) {
    troco = valor - 1;
  } else if (tempo === 60 && valor >= 1.75) {
    troco = valor - 1.75;
  } else {
    troco = valor - 3;
  }
  outTempo.textContent = `Tempo: ${tempo} min`;

  outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
  // if (troco != valor) {
  // }
}
let btResposta = document.querySelector("#btResposta");

btResposta.addEventListener("click", Parquimetro);
