let exercicio1 = () => {

    let n = 8
    let op1 = 0, op2 = 0, op3 = 0, op4 = 0, op5 = 0,td = 0, i = 1,aux = 0

    // Entrada de dados
    while(n != 0){

        n = Number(prompt(`1. Entrega apenas pelo AVA. \n2. Entrega apenas em papel. \n3. Entrega apenas pelo Whatsapp. \n4.  Entrega apenas por email. \n5. Tanto faz \n\n Informe a opção desejada`))

        // Processamento de dados
        switch(n){

            case 1:

                op1++

            break
            case 2:

                op2++

            break   
            case 3:

                op3++
                
            break
            case 4:

                op4++

            break
            case 5:

                op5++

            break
            default:

                if(n != 0){
                    alert(`Você informou um código errado, digite outro por gentileza.`)
                }else(
                    alert(`Programa finalizado =)`)
                )

            
            break

        }

    }

    td = op1 + op2 + op3 + op4 + op5
    let aux = 0

    //o total de votos para cada uma das opções
    alert(`Opção 1: ${op1}\nOpção 2: ${op2}\nOpção 3: ${op3}\nOpção 4: ${op4}\nOpção 5: ${op5}\n`)
    //a porcentagem de votos que Tanto Faz sobre o total de votos
    alert(`${(op5/td)*100}%`)
    //mostre em ordem decrescente quanto recebeu cada tipo de entrega
    
    

}