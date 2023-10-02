function Citacao() {
  let inAutor = document.querySelector("#inAutor");

  let autor = inAutor.value;
  let partes = autor.split(" ");
  let ultimoNome = partes[partes.length - 1].toUpperCase();

  let primeiroNome = autor.match(/[A-Z]/g);
  let nome = "";
  primeiroNome.pop();

  if (autor == "") {
    alert("Insira um nome");
    inAutor.focus();
    return;
  }
  for (let i = 0; i < primeiroNome.length; i++) {
    nome += primeiroNome[i] + ".";
  }

  document.querySelector(
    "#outResposta"
  ).textContent = `Citação Bibliográfica: ${ultimoNome}, ${nome}`;
}
document.querySelector("#btResposta").addEventListener("click", Citacao);
//Daniel da Silva de Azevedo Carvalho
// Mauricio Samy Silva
