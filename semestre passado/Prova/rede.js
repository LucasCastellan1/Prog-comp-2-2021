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
