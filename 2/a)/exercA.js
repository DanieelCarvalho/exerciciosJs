function calcularPreco() {
  let inMedicamentos = document.querySelector("#inMedicamentos");
  let inPreco = document.querySelector("#inPreco");
  let outNome = document.querySelector("#outNome");
  let outValor = document.querySelector("#outValor");
  //let teste = document.querySelector(".teste");

  let medicamento = inMedicamentos.value;
  let preco = Number(inPreco.value);

  let desconto = Math.floor(preco * 2);

  outNome.textContent = "Promoção de " + medicamento;
  outValor.textContent = "Leve 2 por apenas R$: " + desconto.toFixed(2);
}
let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
