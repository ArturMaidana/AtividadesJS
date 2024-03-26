
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const resultado = document.querySelector('#resultado');

const calcjuntar = ( ) => {

    const mesclar = nome.value + ' ' + sobrenome.value;

    resultado.innerHTML = `Olá, seja bem vindo ${mesclar}`;

}