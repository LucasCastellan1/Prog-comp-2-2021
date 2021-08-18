let exercicio0 = function(){
    let vet = []
    for(let i=0;i<5;i++){
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }
    for(let i=0;i<5;i++){
        vet[i] = vet[i] + 10 
    }
    alert(vet) // mostra o vetor

}

let exercicio1 = function(){
    let vet = []
    let par = []
    let impar = []
    for(let i=0;i<6;i++){
        vet.push(Number(prompt(`Informe os numeros${i+1}`)))

    }
    for(let i=0;i<6;i++){
        if(vet[i] %2 == 0){
            par.push(vet[i])
        
    }
        else {
            impar.push(vet[i])
        }
    alert(`Os numeros pares são ${par} e a qtde deles é ${par.length}`)
  
    alert(`Os numeros impares são ${impar} e a qtde deles é ${impar.length}`)
    }

}