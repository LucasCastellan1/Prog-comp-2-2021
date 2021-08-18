function exercicio0(){

    let soma = 0 // valor que neutraliza a soma

    let i = 1

    while(i <= 10){
    
        let nota = Number(prompt(`Informe a nota`))

        soma = soma + nota

        i++
    }
    let media=soma/10
    alert(`A média das notas é ${media}`)
}

function exercicio1(){

    let a, b, c, d, aux
    let contador = 1
    while (contador <= 5) {
        a=Number(prompt(`Informe o valor de a`))
        b=Number(prompt(`Informe o valor de b`))
        c=Number(prompt(`Informe o valor de c`))
        d=Number(prompt(`Informe o valor de d`))

        let i=1

        while (i <= 3){
            if (a>b){
                aux = a
                a = b
                b = aux
            }
            if (b>c){
                aux = b
                b = c
                c= aux
            }
            if (c>d){
                aux = c
                c = d
                d = aux
            }
            i++
        }
        alert (`Ordem crescente: ${a} ${b} ${c} ${d} ${e} ${f}\nOrdem decrescente: ${f} ${e} ${d} ${c} ${b} ${a}`)
        contador ++
    }
}

function exercicio2(){
    let qtde = 120
    let lucro 
    let saida = ""
    let maiorlucro = 0

        for(let preco = 5.0; preco >= 1.0; preco = preco - 0.50){

                lucro = (preco * qtde) - 200 
                    if(lucro > maiorlucro ){
                        maiorlucro = lucro
                        mairoQtde = qtde
                        maiorPreco = preco
                    }
                    saida = saida + `<tr> <td> ${preco.toFixed(2)} </td> <td> ${qtde} </td> <td> R$200 </td> <td> ${lucro.toFixed(2)}</td> <td>`

                    qtde = qtde + 26 
                    
        }
        document.getElementById(`corpo`).innerHTML = saida 
       alert(`Maior Lucro ${maiorlucro} com qtde ${mairoQtde} com preço ${maiorPreco}`)
    }


function exercicio3(){

    let i = 1
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    while (i <=8){
        let idade = Number(prompt(`Informe a idade ${i}`))
        if(idade <= 15){
            f1++
        }
        else if ((idade > 15) && (idade <= 30)){
            f2++
        }
        else if ((idade > 30) && (idade <= 45)){
            f3++
        }
        else if ((idade > 45) && (idade <= 60)){
            f4++
        }
        else {
            f5++
        }
        i++
    }
    alert (`Faixa 1 = ${f1}\n Faixa 2 = ${f2}\n Faixa 3 = ${f3}\n Faixa 4 = ${f4}\n Faixa 5 = ${f5}\n %F1 = ${f1/8*100}\n %F5 = ${f5/8*100}`)

}

function exercicio4(){

    let tipo
    let valor
    let totalPrazo= 0
    let TotalVista = 0
    for(let i = 1;i<15;i++){

        valor = Number(prompt(`Valor das transações ${i}`))
        let i = prompt(`Informe o tipo (V) (avista) e (P) (A prazo) da transação ${i}`).toUpperCase() // converte para maiuculo 
            if(tipo == 'V') {
                TotalVista = TotalVista + valor
            }
            else if(tipo == 'P') {
                totalPrazo = totalPrazo + valor
            }

    }
   let totalGeral = totalPrazo + TotalVista
   let parcela = totalPrazo / 3 

   alert(`Total a vista ${TotalVista} Total a prazo ${totalPrazo}  Total geral ${totalGeral}  1° Parcela ${parcela}`)
}

        function exercicio21(){
               let voto 
               let qtde1 = 0
               let qtde2 = 0
               let qtde3 = 0
               let qtde4 = 0
               let qtdeNulo = 0
               let qtdeBranco = 0
            voto = Number(prompt('informe um voto'))
            do{
                switch(voto){
                    case 1: qtde1++
                        break
                    case 2: qtde2++
                        break
                    case 3 : qtde3++
                        break
                    case 4: qtde4++
                        break
                    case 5 : qtdeNulo++
                        break
                    case 6 : qtdeBranco++
                        break
                }
                voto = Number(prompt('Informe um novo voto. Digite 0 para encerrar a votação'))
            }
            while (voto != 0) 
            let total = qtde1 + qtde2 + qtde3 + qtde4 + qtdeBranco + qtdeNulo 
            console.log(`Candidato  1 ${qtde1} Canditato 2 ${qtde2} Canditato 3 ${qtde3} Candidato 4 ${qtde4}`)
            console.log(`Total de votos nulos ${qtdeNulo} Total de voto em branco ${qtdeNulo/total *100}`)
            console.log(`Votos em branco ${qtdeBranco} Percentual de votos em branco ${qtdeBranco/total*100}`)
         }
    
        //programação funcional 

        let exercicio23 = function(){
            let opcao 
            let salario 
            do{
                opcao = Number(prompt('Digite \n 1  No salario do funcionario  \n 2 Féria  \n 3 Decimo terceiro \n 4 Sair'))
                
            
                switch(opcao){
                    case 1: salario = Number(prompt('Informe o salario'))
                            if(salario < 2100){
                                alert(`Novo salario ${salario + salario * 15/100}`)
                            }
                            else if((salario > 2100) && (salario <= 6000)){ 
                                    alert(`Novo salario ${salario + salario * 10/100}`)
                            }
                            else{
                                alert(`Novo salario ${salario + salario*5 / 100}`)
                            }
                        break
                    case 2: salario = Number(prompt(`Informe o salário `))
                            alert(`O valor das ferias é de: ${salario + 1/3*salario}`)
                        break
                    case 3: salario = Number(prompt(`Informe o salário `))
                            let meses = Number(prompt(`Informe o numero de meses trabalhados`))
                                alert(`O valor do decimo terceiro é de: ${(salario * meses) / 12}`)
                        break
                    case 4: alert(`O programa foi encerrado!`)
                        break
                    default: alert('Opção invalida. Tente novamente!')

                }
            }
            while (opcao != 4) {
                
            }
        }
    