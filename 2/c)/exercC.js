function Supermercado() {
  let inProduto = document.querySelector("#inProduto");
  let inPreco = document.querySelector("#inPreco");
  let outProduto = document.querySelector("#outProduto");
  let outResultado = document.querySelector("#outResultado");

  let produto = inProduto.value;
  let preco = Number(inPreco.value);

  let promocao = preco / 2;
  let resultado = preco * 2 + promocao;

  outProduto.textContent = `${produto} - Promoção: Leve 3 por R$: ${resultado.toFixed(
    2
  )}`;

  outResultado.textContent = `O 3º produto custa apenas R$: ${promocao.toFixed(
    2
  )}`;
}
let btResultado = document.querySelector("#btResultado");

btResultado.addEventListener("click", Supermercado);
