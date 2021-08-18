let questão2 = () =>{
    
    let whatsapp = 0
    let email = 0
    let pepel = 0 
    let tf = 0
    let ava = 0
    let opcao = 0 

    do{
        opcao = Number(prompt('Informe uma opação'))
        switch(opcao){
            case 1: ava++
                     break
            case 2: papel++
                    break
            case 3: whatsapp++
                    break
            case 4: email++
                    break
            case 5: tf++
                    break
        
            
            default: alert('Opção invalida')
        }
    }
    while (opcao != 0) {
    console.log(`ava ${ava} - Papel ${papel} - Whatsapp ${whatsapp} - tf ${tf}`)
    console.log(`${tf/(ava+papel+whatsapp+email+tf)*100}`) 
    
    let troca
    for(let i = 0;i<4;i++){
    if(ava>papel){
        troca = ava; 
        ava = papel;
        papel = troca
    }
    if(papel>whatsapp){
        troca = papel;
        papel = whatsapp;
        whatsapp = troca;
    }
    if(whatsapp>email){
        troca = whatsapp; 
        whatsapp = email
        email = troca;
    }
    if(email>tf){
        troca = email;
        email = tf;
        tf = troca 
        }
    }
    console.log(`${tf} ${email} ${whatsapp} ${papel} ${ava}`)
    }
}
