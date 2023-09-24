function Criacao() {
  let inPet = document.querySelector("#inPet");
  let inAnos = document.querySelector("#inAnos");
  let outResultado = document.querySelector("#outResultado");

  let pet = Number(inPet.value);
  let anos = Number(inAnos.value);
  let quantidade = "";
  let total = pet;

  if (pet < 2 || isNaN(pet) || anos == 0 || isNaN(anos)) {
    alert("Informe corretamente os dados...");
    inChin.focus();
    return;
  }

  for (let i = 1; i <= anos; i++) {
    quantidade += `${i}° Ano: ${total} Chinchilas\n `;
    total += total * 3;
  }

  outResultado.textContent = `${quantidade} `;
}
let btResultado = document.querySelector("#btResultado");
btResultado.addEventListener("click", Criacao);
