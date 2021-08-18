let exercicio2 = () => { 
    // [] vazio 
    let jogadores = []
    let pontos = []
    let junta = 0
    let ma = 0
    let destaque = 0
    let lal = ''
    let pares = []
    let b = 0

    for(let i = 0; i < 12; i++){

        //media do time
        jogadores.push(prompt(`Informe o nome do Jogador: `))
        pontos.push(Number(prompt(`Informe quantos pontos o jogador fez`)))

        junta = junta + pontos[i]

        if((pontos[i] % 2) == 0){

            pares.push(jogadores[i])
            b++

        }

        //jogador com mais pontos 
        if(mj < pontos[i]){

            nm = jogadores[i]
            destaque = pontos[i]

        }

    }

    ma = junta/12

    alert(`A média de pontos do time foi de: ${ma}\nO nome do jogador com mais pontos é: ${lal}, e ele fez ${destaque} pontos`)

    //numeros pares, (Console)
    console.log(`Jogadores que tiveram pontos pares`)
    for(let i = 0; i < b; i++){

        console.log(pares[i])
        // numeros pares 
    }
    

}