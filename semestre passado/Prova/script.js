let exercicio1 = () => {

    // declarando as variaveis 
    let p = 8
    let l = 1
    let total = 0
    let opcao1 = 0
    let opcao2 = 0
    let opcao3 = 0
    let opcao4 = 0
    let opcao5 = 0
    let guarda = 0

    
    while(p != 0){

        p = Number(prompt(`1. Entrega apenas pelo AVA. 
        \n2. Entrega apenas em papel. 
        \n3. Entrega apenas pelo Whatsapp. 
        \n4.  Entrega apenas por email. 
        \n5. Tanto faz 
        \n\n Informe a opção desejada`))

       // opções para realizar o exercicio 
        switch(p){

            case 1:
                opcao1++
            break
            case 2:
                opcao2++
            break   
            case 3:
                opcao3++
            break
            case 4:
                opcao4++
            break
            case 5:
                opcao5++
            break
            default:

                if(p != 0){
                    alert(`Codigo errado, informe novamente.`)
                }else(
                    alert(`Programa finalizado`)
                )
            break

        }

    }
        // soma de todas as opções
    total = opcao1 + opcao2 + opcao3 + opcao4 + opcao5

   
    alert(`Opção 1: ${opcao1}\nOpção 2: ${opcao2}\nOpção 3: ${opcao3}\nOpção 4: ${opcao4}\nOpção 5: ${opcao5}\n`)
    //a porcentagem de votos que Tanto Faz sobre o total de votos
    alert(`${(opcao5/total)*100}%`)
    //mostre em ordem decrescente quanto recebeu cada tipo de entrega
    
    while (l <= 4) {
        if (opcao1 > opcao2) { // troca p1 com p2
            guarda = opcao1
            opcao1 = opcao2
            opcao2 = guarda
        }
        if (opcao2 > opcao3) { // troca p2 com p3
            guarda = opcao2
            opcao2 = opcao3
            opcao3 = guarda
        }
        if (opcao3 > opcao4) { // troca p3 com p4
            guarda = opcao3
            opcao3 = opcao4
            opcao4 = guarda
        }
        if (opcao4 > opcao5) { // troca p4 com p5
            guarda = opcao4
            opcao4 = opcao5
            opcao5 = guarda
        }

        i++
    }
        console.log(`${opcao2}\n ${opcao3} \n ${opcao4} \n ${opcao5} \n ${opcao2}`)
}

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