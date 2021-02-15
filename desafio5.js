const mewtwo = {
    nomeDoPokemon: 'Mewtwo',
    urlFoto: 'foto.jpeg',
    conversorJson: () => JSON.stringify(this.Object),
    mostrarJSON: (opcao) => {
        switch(opcao){
            case true:
                console.log(mewtwo.conversorJson(mewtwo))
                break
            case false: 
                console.log(mewtwo)
                break
            default:
                console.log('Apenas valor booleanos')
        }
    }
}


// console.log(typeof(mewtwo.conversorJson()))
console.log(mewtwo.conversorJson())
mewtwo.mostrarJSON(true)
mewtwo.mostrarJSON(false)
