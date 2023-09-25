let numeros = [];

function Adicionar() {
  let inAdicionarNum = document.querySelector("#inAdicionarNum");

  let num = Number(inAdicionarNum.value);
  if (num == "" || isNaN(num)) {
    alert("Insira um numero");
    inAdicionarNum.focus();
    return;
  }

  numeros.push(num);

  document.querySelector("#outNumeros").textContent = `Numeros: ${numeros} `;
  console.log(numeros);
  inAdicionarNum.value = "";
  inAdicionarNum.focus();
}
let btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", Adicionar);

function VerificarOrdem() {
  let copia = [];
  copia = numeros.slice();
  copia.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === copia[i]) {
      document.querySelector(
        "#outAtencao"
      ).textContent = `Atenção... Números Estão em ordem crescente`;
    } else {
      document.querySelector(
        "#outAtencao"
      ).textContent = `Atenção... Números Não Estão em ordem crescente`;
    }
  }
}
document
  .querySelector("#btVerificar")
  .addEventListener("click", VerificarOrdem);
function Limpar() {
  numeros = [];
  document.querySelector("#outAtencao").textContent = "";
  document.querySelector("#outNumeros").textContent = "";
}

document.querySelector("#btLimpar").addEventListener("click", Limpar);
