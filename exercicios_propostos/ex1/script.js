function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas.`
    if(hora>=0 && hora<12){
        //Bom Dia
        img.src = 'manha_web.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora<18){
        //Boa Tarde
        img.src = 'tarde_web.png'
        document.body.style.background='#b9846f'
    }else{
        //Boa Noite
        img.src='noite_web.png'
        document.body.style.background='#515154'
    }
}