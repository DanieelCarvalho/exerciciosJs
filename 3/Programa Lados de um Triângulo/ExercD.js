function LadosTriangulo() {
  let inLadoA = document.querySelector("#inLadoA");
  let inLadoB = document.querySelector("#inLadoB");
  let inLadoC = document.querySelector("#inLadoC");
  let outLados = document.querySelector("#outLados");
  let outTipos = document.querySelector("#outTipos");

  let ladoA = Number(inLadoA.value);
  let ladoB = Number(inLadoB.value);
  let ladoC = Number(inLadoC.value);
  let lados;
  let tipo;

  if (
    ladoA === 0 ||
    isNaN(ladoA) ||
    ladoB === 0 ||
    isNaN(ladoB) ||
    ladoC === 0 ||
    isNaN(ladoC)
  ) {
    alert("Insira um valor válido");
    inLadoA.focus();
    return;
  }

  if (ladoA > ladoB + ladoC || ladoC > ladoA + ladoB || ladoB > ladoC + ladoA) {
    lados = "Não podem formar triangulo!";
  } else if (ladoA === ladoB && ladoB === ladoC) {
    lados = "Lados podem formar um triângulo";
    tipo = "Equilátero";
  } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
    lados = "Lados podem formar um triângulo";
    tipo = "Isósceles";
  } else {
    lados = "Lados podem formar um triângulo";
    tipo = "Escaleno";
  }

  outLados.textContent = `${lados}`;
  outTipos.textContent = `Tipo: ${tipo}`;
}

let btResultado = document.querySelector("#btResultado");
btResultado.addEventListener("click", LadosTriangulo);
console.log(btResultado + 1);
