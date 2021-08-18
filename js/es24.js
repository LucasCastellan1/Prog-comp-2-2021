function calcular(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    let situacao
    let aumento
    if (preco <= 25){
        switch (categoria) {
            case 1: aumento = (5 * preco) / 100
                break;
            case 2: aumento = (8 * preco) / 100
                break;
            case 3: aumento = (10 * preco) / 100
                break
        }
}
    else {
        switch (categoria) {
            case 1: aumento = (12 * preco) / 100
                break;
            case 2: aumento = (15 * preco) / 100
                break;
            case 3: aumento = (18 * preco) / 100
                break
        }
    }
    let imposto
    if((categoria == 2) || (situacao == 'R')){
        imposto = (5 * preco) / 100
    }
    else{
        imposto = (8 * preco) / 100
    }
    let novo = preco + aumeto - imposto
    if (novo < 50){
        classificacao = "barato"
    }
    else if (classificacao <= 120){
        classificacao ="normal"
    }
    else{
        classificacao = "caro"
    }
}