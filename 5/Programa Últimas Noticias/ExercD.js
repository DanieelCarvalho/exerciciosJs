let noticias = [];

function Adicionar() {
  let inNoticia = document.querySelector("#inNoticia");

  let noticia = inNoticia.value;
  noticias.push(noticia);
  console.log(noticias);
  inNoticia.value = "";
  inNoticia.focus();
  document.querySelector(
    "#outNoticiasCadastros"
  ).textContent = `Noticias Cadastradas: ${noticias.length}`;
}
document.querySelector("#btAdicionar").addEventListener("click", Adicionar);

function UltimasNoticias() {
  let qNoticias = Number(prompt("Número de Noticias que deseja ver:"));
  let total = noticias.length;
  let copia = noticias.slice();
  copia.reverse();
  let dados = "";
  let teste;
  document.querySelector(
    "#outQNoticias"
  ).textContent = `${qNoticias} Últimas Notícias.\n  -------------------------------------- \n `;
  for (let i = total - 1; i >= total - qNoticias; i--) {
    dados += `${i + 1}°) ${noticias[i]} \n`;
  }

  document.querySelector("#outUltimas").textContent = `${dados}`;
}
document.querySelector("#btListar").addEventListener("click", UltimasNoticias);
