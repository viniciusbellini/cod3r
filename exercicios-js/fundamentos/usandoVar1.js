{
    {
        {
            var teste = 'teste'
        }
    }
}
console.log(teste)


var numero = 1
{
    var numero = 2
    console.log('dentro', numero)
}
console.log('fora', numero)