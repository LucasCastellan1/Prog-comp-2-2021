let gerenciaredesoci = () =>{

    let = vetorredesoci = ['']
    
    for(let i=0;i<5;i++){
        let objeto = {
            codigodarede:Number(prompt('Informe o codigo da rede social')),
            nome:prompt('Informe o nome da rede social'),
            url:prompt('informe o url da rede social'),
        }
        vetorredesoci.push(objeto)
    }
    }
    // cadastro dos usuarios 
    let usuario = () => {
    
    let = vetorusu['']
    for (let i=0;i<5;i++){
    
        let usu= {
            codigo:Number(prompt('Informe o codigo do serviço:')),
            nome:prompt("informe o nome da rede social"),
            qtdepost:Number(prompt('informe a quantidade  de post:')),
        }
        let achou = false 
        let j = 0
        while (!achou && j<5) {
            if(codigodarede[j].codigo == objeto.codigo){
                vetorusu.push(objeto)
                achou = true
                alert('Usuario inserido com sucesso')
            }
            j++
        }
        if(!achou){
            alert('Usuario não inserido, Rede social não encontrada')
        }
        }
    }
    
let codigo = Number(prompt('Informe o codigo da rede social:'))
let conta = 0 
    for(let i =0;i<5;i++){
        while (!achou && i<5){
            if(vetorusu[i].codigodarede == codigo){
                conta = conta + vetorusu[i].qtdepost
            }
        }
    }
        if(conta == 0){
        console.log('Não houve postagem ou rede social nao existe')
        }
        else{
            console.log(`A quantidade de post na rede social ${codigo} foi ${conta}`)
        }
let vetorger = ['']
for(let i=0;i<5;i++){
    let cont =0     // para cada rede social
    for(let j=0;j<5;j++){
            if(codigodarede[i].codigo == codigo[j].codigodarede){
              cont = cont + vetorusu[i].qtdepost
            }
        }
        console.log(`A quantidade de post da rede social ${codigodarede[i].codigo} é ${cont}`)
    }
let achei = false 
let somapost
let login = prompt(`Inforome o Login do Usuario Desejado`)
for(let i =0;i<5;i++){
    if(login == vetorusu[i].login){ //acheei o usuario desejado 
        somapost = somapost + vetorusu[i].qtdepost
        achei = true
    }
}
if(achei){
    alert(`O usuario com o Login ${login} realizou ${somapost}`)
}
else{
    alert(`Usuario não encontrado :(  )`)
}

let achouu = false
let somaoqjatem
let vetorusuariospost
for(let i =0;i<5;i++){
    for(let j=0;j<vetorusuariospost.length;j++){
        if(vetorusu[i].login == vetorusuariospost[i].login){
            vetorusuariospost[j].qtdepost = vetorusuariospost[j].qtdepost + vetorusu[i].qtdepost
            achouu = true
        }
    }
    if(!achouu){
        vetorusuariospost.push({
            login: vetorusu[i].login,
            qtdepost: vetorusu[i].qtdepost
        })
    }
}
