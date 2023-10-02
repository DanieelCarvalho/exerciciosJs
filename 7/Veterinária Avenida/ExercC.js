function calcularVacina() {
  let inValor = document.getElementById("inValor");
  let selConvenio = document.getElementById("selConvenio");
  let outDesconto = document.getElementById("outDesconto");
  let outPagar = document.getElementById("outPagar");

  let valor = Number(inValor.value);

  if (valor == 0 || isNaN(valor)) {
    alert("Informe o valor corretamente");
    inValor.focus();
    return;
  }

  let desconto;

  if (rbSim.checked) {
    if (selConvenio.value == "amigo") {
      desconto = calcularDesconto(valor, 20);
    } else {
      desconto = calcularDesconto(valor, 50);
    }
  } else {
    desconto = calcularDesconto(valor, 10);
  }

  outDesconto.textContent = "Desconto R$: " + desconto.toFixed(2);
  outPagar.textContent = "A Pagar R$: " + (valor - desconto).toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularVacina);

function calcularDesconto(valor, taxa) {
  let total = valor * (taxa / 100);
  return total;
}
document
  .querySelector("#btCalcular")
  .addEventListener("click", calcularDesconto);

let rbSim = document.getElementById("rbSim");
rbSim.addEventListener("change", function () {
  var pConvenio = document.querySelector("#pConvenio");
  pConvenio.className = "exibeLinha";
});

let rbNao = document.querySelector("#rbNao");
rbNao.addEventListener("change", function () {
  let pConvenio = document.querySelector("#pConvenio");
  pConvenio.className = "oculta";
});
