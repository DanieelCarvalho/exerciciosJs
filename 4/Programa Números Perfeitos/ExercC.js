function NumerosPerfeitos() {
  let inNumero = document.querySelector("#inNumero");
  let outCalculo = document.querySelector("#outCalculo");
  let outResposta = document.querySelector("#outResposta");

  let numero = Number(inNumero.value);
  let divisores = "";
  let valorTotal = 0;

  if (isNaN(numero) || numero === 0) {
    alert("Insira um valor válido");

    inNumero.focus();

    return;
  }

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      divisores += `${i}, `;
      valorTotal += i;
    }
  }
  divisores = divisores.substring(0, divisores.length - 2);

  outCalculo.textContent = `Divisores do ${numero}: ${divisores}(Soma: ${valorTotal})`;
  if (numero === valorTotal) {
    outResposta.textContent = `${numero} É um Número Perfeito`;
  } else {
    outResposta.textContent = `${numero} Não É Um Número Perfeito`;
  }
  console.log(divisores);
  console.log(valorTotal);
}
let btResultado = document.querySelector("#btResultado");
btResultado.addEventListener("click", NumerosPerfeitos);
