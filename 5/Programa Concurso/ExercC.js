let candidatos = [];

function Candidatos() {
  let inCandidato = document.querySelector("#inCandidato");
  let inAcertos = document.querySelector("#inAcertos");

  let candidato = inCandidato.value;
  let acertos = Number(inAcertos.value);

  if (candidato === "" || isNaN(acertos) || acertos === 0) {
    alert("Insira Valores válidos");
    inCandidato.focus();
    return;
  }

  candidatos.push({ nome: candidato, nAcertos: acertos });
  console.log(candidatos);
  inCandidato.value = "";
  inAcertos.value = "";
  inCandidato.focus();
  Listar();
}
document.querySelector("#btAdicionar").addEventListener("click", Candidatos);

function Listar() {
  let dados = "";
  for (let i = 0; i < candidatos.length; i++) {
    dados += `${candidatos[i].nome} - ${candidatos[i].nAcertos} acertos \n`;
  }
  document.querySelector("#outResposta").textContent = dados;
}
document.querySelector("#btListar").addEventListener("click", Listar);

function Aprovados() {
  let dados = "";
  let numAprovacao = Number(prompt("numero de acertos para aprovação:"));
  let copia = candidatos.slice();
  copia.sort(function (a, b) {
    return a.nAcertos - b.nAcertos;
  });
  copia.reverse();

  for (let i = 0; i < copia.length; i++) {
    if (copia[i].nAcertos >= numAprovacao) {
      dados += `${copia[i].nome} - ${copia[i].nAcertos} acertos \n`;
      dados.rev;
    }
  }

  document.querySelector("#outResposta").textContent = dados;
}
document.querySelector("#btResultado").addEventListener("click", Aprovados);
