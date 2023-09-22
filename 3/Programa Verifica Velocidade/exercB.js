function VerificarVelocidade() {
  let inVPermitida = document.querySelector("#inVPermitida");
  let inVCondutor = document.querySelector("#inVCondutor");

  let outSituacao = document.querySelector("#outSituacao");

  let vPermitida = Number(inVPermitida.value);
  let vCondutor = Number(inVCondutor.value);
  let multaLeve = vPermitida * 0.2 + vPermitida;
  let resposta = "";

  if (
    inVPermitida.value == "" ||
    isNaN(vPermitida) ||
    inVCondutor.value == "" ||
    isNaN(vCondutor)
  ) {
    alert("insira um número");
    inVPermitida.focus();
    return;
  }

  if (vCondutor <= vPermitida) {
    resposta = "Sem multa";
  } else if (vCondutor > vPermitida && vCondutor <= multaLeve) {
    resposta = "multa leve";
  } else {
    resposta = "Multa Grave";
  }

  outSituacao.textContent = `${resposta}`;
  console.log(multaLeve);
}
let btResposta = document.querySelector("#btResposta");
btResposta.addEventListener("click", VerificarVelocidade);
