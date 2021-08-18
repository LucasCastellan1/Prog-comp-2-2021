function mp(){
    // estrada de dados
    // sintaxe para declarar variável em JS
    // let nome_vatiável
    // converter texto para número
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    // processamento
    let media = ((nota1*2) + (nota2*3)) / (2+3)

    // saída
    // innerHTML permite colocar conteúdo dentro do elemeto
    // se a função é chamada por uma variável, o nome começa com minúsculo
    document.getElementById("resultado").innerHTML = media.toFixed(2)

}