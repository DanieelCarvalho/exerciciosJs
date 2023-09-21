function LanHouse() {
  let inValor = document.querySelector("#inValor");

  let inTempo = document.querySelector("#inTempo");

  let outValor = document.querySelector("#outValor");

  let valor = Number(inValor.value);

  let tempo = Number(inTempo.value);

  let tempoDeUso = tempo / 15;

  let valorPagar = Math.ceil(tempoDeUso) * valor;

  outValor.textContent = `Valor a pagar R$: ${valorPagar.toFixed(2)}`;
}

let btResultado = document.querySelector("#btResultado");
btResultado.addEventListener("click", LanHouse);
