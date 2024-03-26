// Solicita ao usuário o valor do produto e o percentual de desconto
const resultado = document.querySelector('#resultado');
const valor  = document.querySelector('#valor');
const desconto = document.querySelector('#desconto');

// Calcula o valor do desconto em reais
const calcDesconto = ( ) =>{

var valorDesconto = (valor.value * desconto.value) / 100;

// Calcula o valor final com o desconto
var valorFinal = valor.value - valorDesconto;

// Exibe o valor final com o desconto
resultado.innerHTML = ("O valor final com desconto é: R$" + valorFinal.toFixed(2));
}