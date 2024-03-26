const temperatura = document.querySelector('#temperatura');
const resultado = document.querySelector('#resultado');

const calcTemp = ( ) => {

    const exect = (temperatura.value * 1.8) + 32;
    
    resultado.innerHTML = `A temperatura em Fahrenheit é ${exect}`}