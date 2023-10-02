function Nome() {
  let inNome = document.querySelector("#inNome");
  let inIdade = document.querySelector("#inIdade");
  let outNome = document.querySelector("#outNome");
  let outPontilhado = document.querySelector("#outPontilhado");
  let outCategoria = document.querySelector("#outCategoria");
  let outResposta = document.querySelector("#outResposta");

  let nome = inNome.value;
  let idade = Number(inIdade.value);

  if (nome == "" || isNaN(idade)) {
    alert("Insira um valor válido");
    inNome.focus();
    return;
  }

  let tracos = Tracos(nome);

  let cAlunos = CategorizarAlunos(idade);
  //   outNome.textContent = nome;
  //   outPontilhado.textContent = tracos;
  //   outCategoria.textContent = `Categoria: ${cAlunos}`;
  outResposta.textContent = `${nome} \n${tracos}\nCategorias: ${cAlunos}`;
}
document.querySelector("#btResposta").addEventListener("click", Nome);

function Tracos(nome) {
  let tracos = "-";
  let dados = "";

  for (let i = 0; i < nome.length; i++) {
    if (nome.charAt(i) == " ") {
      dados += " ";
    } else {
      dados += tracos;
    }
  }
  return dados;
}
function CategorizarAlunos(idade) {
  let categoria = "";
  if (idade <= Number(12)) {
    categoria = "Infantil";
  } else if (idade >= 13 && idade <= 18) {
    categoria = "Juvenil";
  } else {
    categoria = "Adulto";
  }
  return categoria;
}
