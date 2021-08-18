 /* JavaScript */
 function organizar(){ // usamos funciton para organizar
    // vamos recuperar o peso digitado pelo usuário
    //document -> representa o documento HTML
    // getElementById("peso") -> recupera a caixa de texto
    // . value -> recuepra o valor dentro da caixa de texto
    // let peso -> declarando uma variável que guarda o peso
    let peso = document.getElementById("peso").value
    //vamos recuperar a altura digitada pelo usuario
    let altura = document.getElementById("altura").value
    //calcular e mostrar o imc
    //comando de igual é de atribuição
    let imc = peso / (altura * altura)
    alert(`O valor do imc é de imc é de: ${imc.toFixed(2)}`)// é o mais novo
}