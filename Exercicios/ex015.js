var peso = 55
var imc = 15
console.log() `Aqui iremos calular o seu IMC`

if (imc < 18.5) {  
    console.log `Você esta pesando ${peso} com base no calculo do seu IMC você está Abaixo do peso`
} if (imc >= 18.5 && imc < 25) {
    console.log `Você esta pesando ${peso} com base no calculo do seu IMC você está peso normal`
} else if (imc >= 25 && imc < 30) {
    console.log `Você esta pesando ${peso} com base no calculo do seu IMC você está Acima do peso`
} else if (imc >= 30 && imc < 40) {
    console.log `Você esta pesando ${peso} com base no calculo do seu IMC você está Obeso`
} else {
    console.log`Vá atrás de um medico você vai morrer`
}