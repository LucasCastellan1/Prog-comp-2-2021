
let exercicio0 = function () {
    let vet = [] // declaração do vetor
    // entrada de dados
    for(let i=0;i<5;i++){
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }
    // processamento
    // soma 10 em todos os elementos do vetor
    for(let i=0;i<5;i++){
        vet[i] = vet[i] + 10
    }
    console.log(vet) // o comando console.log() identifica o vetor e mostra os elementos
}

let exercicio1 = function () {
    let vet = [] // declaração de vetor
    // entrade de dados
    for(let i=0;i<6;i++){
        vet.push(Number(prompt(`Informe o número ${i+1}`)))
    }
    // processamento
    let pares = [] // vetor contem os valores pares
    let impares = [] // vetor contém os valores ímpares
    for(let i=0;i<6;i++){ // para cada elemento do vetor
        if (vet[i] % 2 == 0){ // verifico se o elemento é par
            pares.push(vet[i]) // insere o elemento par no vetor
        }
        else {
            impares.push(vet[i])
        }
    }
    console.log(`Os valores pares são ${pares} e a qtde deles é ${pares.length}`)
    console.log(`Os valores ímpares são ${impares} e a qtde deles é ${impares.length}`)

}

// up na empregabilidade
// arrow function ou função com seta
// Ecma Script 6 - ES6 (troque a palavra funcion por uma seta)
let exercicio4 = () => {

    let vet = [] // criamos
    // entrada de dados
    for(let i=0;i<15;i++){ // i começa com 0
        vet.push(Number(prompt(`Informe o número ${i+1}`)))
    }
    // processamento
    let posicao30 = []
    for(let i=0;i<15;i++){
        if (vet[i] == 30)
        posicao30.push(i) //guarda a posição i e não o 30 - vet[i]
    }

    console.log(`As posições onde aparecem o número 30 são ${posicao30}`)

}

// arrow function - função com seta
let exercicio5 = () => {
    let logica = []
    let linguagem = []

    // entrada de dados
    for(let i=0;i<15;i++){
        logica.push(Number(prompt(`Informe o número do aluno ${i+1} matriculad na disciplina de lógica `)))
    }
    for(let j=0;j<10;j++){
        linguagem.push(Number(prompt(`Informe o número do aluno ${j+1} matriculado na disciplina linguagem`)))
    }

    // intersecção
    let interseccao = []
    for(let i=0; i<15;i++){ // para cada elemento do vetor lógica
        for(let j=0;j<10;j++){ // para cada elemento do vetor linguagem
            if (logica[i] == linguagem[j]){
                interseccao.push(logica[i])
            }
        }
    }
    console.log(`Os alunos que fazem tanto a disciplina lógica como linguagem são ${interseccao}`)

}

let exercicio3 = () => {
    let vet1 = []
    let vet2 = []
    // entrada de dados
    for(let i=0;i<10;i++){
        vet1.push(prompt(`Informe o código do produto`))
        vet2.push(Number(prompt(`Informe a qtde do produto ${vet1[i]} em estoque`)))
    }
    // faremos as compras
    let codigoCliente = Number(prompt(`Informe o código do cliente`))
    do {
        // pede código pra compra
        let codigo = prompt(`Informe o código do produto para compra`)
        let achou = false // variável booleana
        // verifica se o código existe
        for(let i=0;i<10;i++){
            if (vet1[i] == codigo){
                achou = true
                // se existe, pede qtde para comprar
                let qtde = Number(prompt(`Informe a qtde para compra`))
                if (qtde <= vet2[i]){
                    // se tem em estoque, atualizá-o
                    vet2[i] = vet2[i] - qtde
                }
                else {
                    alert(`Infelizmente, não temos o produto em estoque`)
                }
            }
        }
        if (achou == false){   
            alert(`Infelizmente, não temos o produto`)
        }
        codigoCliente = Number(prompt(`Informe o código do cliente para a próxima compra. Informe 0 para encerrar`))
    }
    while (codigoCliente != 0)

    console.log(`O valor do estoque é ${vet2}`)
}