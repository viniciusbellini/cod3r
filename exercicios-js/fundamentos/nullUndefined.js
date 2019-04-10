let valor //variavel não inicializada - undefined
console.log(valor)

valor = null //agora ela está inicializada, porem com ausencia de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {} //variavel inicializada com um objeto
console.log(produto.preco) //atrituto preco em produto está undefined
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço, neste caso ideal seria atribuir 0
console.log(!!produto.preco)
console.log(produto)