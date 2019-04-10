//Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(1, 2)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 4))

//retorno implicito
const soma2 = (a, b) => a + b
console.log(soma2(5, 6))

const imprimir = a => console.log(a)
imprimir("texto")