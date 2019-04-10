//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(1, 3)
imprimirSoma(1, 3, 5, 7)
imprimirSoma(1)
imprimirSoma()

//funcao com retorno
function soma(a, b =0){
    return a + b
}

console.log(soma(1, 3))
console.log(soma(1, 3, 5, 7))
console.log(soma(1))
console.log(soma())