function Criptografar() {
  let inMensagem = document.querySelector("#inMensagem");

  let mensagem = inMensagem.value;
  if (mensagem === "") {
    alert("Insira uma Mensagem");
    inMensagem.focus();
    return;
  }
  let tam = mensagem.length;

  let dados = "";

  for (let i = 1; i < tam; i += 2) {
    dados += mensagem.charAt(i);
  }

  for (let i = 0; i < tam; i += 2) {
    dados += mensagem.charAt(i);
  }
  console.log(dados);

  document.querySelector("#outResposta").textContent = `${dados}`;
}
document
  .querySelector("#btCriptografar")
  .addEventListener("click", Criptografar);

function Descriptografar() {
  let inMensagem = document.querySelector("#inMensagem");

  let mensagem = inMensagem.value;
  if (mensagem === "") {
    alert("Insira uma Mensagem");
    inMensagem.focus();
    return;
  }
  let dados = "";

  let tam = mensagem.length;
  let metade = Math.floor(tam / 2);

  if (tam % 2 == 0) {
    for (var i = metade; i < tam; i++) {
      dados += mensagem.charAt(i);
      dados += mensagem.charAt(i - metade);
    }
  } else {
    for (var i = metade; i < tam - 1; i++) {
      dados += mensagem.charAt(i);
      dados += mensagem.charAt(i - metade);
    }
    dados += mensagem.charAt(i);
  }
  document.querySelector("#outResposta").textContent = `${dados}`;
}
document
  .querySelector("#btDescriptografar")
  .addEventListener("click", Descriptografar);
// proponho uma troca

//rpnouatoapooh m rc

// impar: R N U T A O H M R
// par: P O A O P O

// rnutao
