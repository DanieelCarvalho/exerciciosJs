function Multa() {
  let inData = document.querySelector("#inData");
  let inValor = document.querySelector("#inValor");

  let data = inData.value;

  let valor = Number(inValor.value);

  let dataLimite = new Date();

  let partes = data.split("-");

  dataLimite.setDate(Number(partes[2]));
  dataLimite.setMonth(Number(partes[1]));
  dataLimite.setFullYear(Number(partes[0]));

  let dia = dataLimite.getDate();
  dataLimite.setDate(dia + 90);

  let diaLimite = dataLimite.getDate();

  let mes = dataLimite.getMonth() + 1;
  let ano = dataLimite.getFullYear();

  var comDesconto = valor * 0.8;

  document.querySelector("#outData").textContent =
    "Data Limite para Pagto com Desconto: " +
    (dia < 10 ? "0" + dia : dia) +
    "/" +
    (mes < 10 ? "0" + mes : mes) +
    "/" +
    ano;
  document.querySelector("#outDesconto").textContent =
    "Valor com Desconto R$: " + comDesconto.toFixed(2);
  console.log(dia);
  console.log(diaLimite);
}
document.querySelector("#btResposta").addEventListener("click", Multa);
