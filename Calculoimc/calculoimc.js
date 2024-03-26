//Declarando as constantes para executar o calculo
const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = ( ) => {
    
    if(altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        let classificatuin = ' '

        if(imc < 18.5) {
            classificatuin = 'Abaixo do peso'
    }else if(imc < 25 ){
        classificatuin = 'Peso normal'
    }else if(imc <30){
        classificatuin = 'Acima do Peso'
    }else if(imc <35){
        classificatuin = 'Obesidade grau I'
    }else if(imc <41){
        classificatuin = 'Obesidade grau II'
    }else {
        classificatuin = 'Obesidade grau III'
    }
    resultado.innerHTML = `IMC: ${imc} ${classificatuin}`
    }else{
        resultado.innerHTML = 'Preencha os campos'
    }
}
