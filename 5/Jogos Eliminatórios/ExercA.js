let clubes = [];
console.log(clubes);

function Adicionar() {
  let inClube = document.querySelector("#inClube");
  let clube = inClube.value;

  if (clube == "" || inClube.value === "") {
    alert("Insira um clube");
    inClube.focus();
    return;
  }

  clubes.push(clube);

  inClube.value = "";
  inClube.focus();
  ListarClubes();
  document.querySelector("#outTabela").textContent = "";
}
let btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", Adicionar);

function ListarClubes() {
  if (clubes.length === 0) {
    alert("Não há Crianças na lista");
    return;
  }
  let lista = "";

  for (let i = 0; i < clubes.length; i++) {
    lista += `${i + 1}. ${clubes[i]} \n`;
  }

  document.querySelector("#outClubes").textContent = `${lista}`;
}
let btListar = document.querySelector("#btListar");
btListar.addEventListener("click", ListarClubes);
function TabelaDoJogo() {
  if (clubes.length % 2 !== 0 || clubes.length === 0) {
    alert("Clubes insuficientes para Montar Tabela");
    Adicionar();
    return;
  }

  let tabelaJogos = "";
  let copia = [];
  copia = clubes.slice().reverse();
  console.log(copia);
  console.log(clubes);

  for (let i = 0; i < clubes.length / 2; i++) {
    tabelaJogos += `${clubes[i]} x ${copia[i]} \n`;
  }
  document.querySelector("#outClubes").textContent = "";
  document.querySelector("#outTabela").textContent = tabelaJogos;
}
document.querySelector("#btTabela").addEventListener("click", TabelaDoJogo);
function Limpar() {
  console.log(clubes + "oi");
  clubes = [];
  console.log(clubes + "vazio");
  document.querySelector("#outClubes").textContent = "";
  document.querySelector("#outTabela").textContent = "";
}
let btLimpar = document.querySelector("#btLimpar");
btLimpar.addEventListener("click", Limpar);
