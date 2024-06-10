const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
  const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
  if (ehUltimoCartao) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
  const ehprimeiroCartao = cartaoAtual === 0;
  if (ehprimeiroCartao) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao();
});
function newFunction() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
