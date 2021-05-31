function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.lenght == 0 || Number(fAno.value > ano)){ //caso não tivesse colocado o Number na frente o JS conseguiria detectar, mas é uma garantia. Melhor utilizar.
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        //window.alert('Tudo ok') -Para verificar a primeira parte do if-else

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade calculada: ${idade} anos` -Para verificar se o cálculo da idade está correto

        var genero =''

        //Criação da Tag Dinamicamente
        var img = document.createElement('img') //Jeito para criar a tag img
        img.setAttribute('id','foto') //Cria Id para a tag img
        

        if(fsex[0].checked){
            genero='Homem'
            if(idade >= 0 && idade <= 4){
                //Bebe
                img.setAttribute('src','bebeH_web.png' )
            }else if(idade <= 12){
                //Criança
                img.setAttribute('src','criancaH_web.png')
            }else if(idade <= 21){
                //Adolescente
                img.setAttribute('src','adolescenteH_web.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src','adultoH_web.png')
            }else{
                //Idoso
                img.setAttribute('src','idosoH_web.png')
            }
        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >= 0 && idade <= 4){
                //Bebe
                img.setAttribute('src','bebeM_web.png')
            }else if(idade <= 12){
                //Criança
                img.setAttribute('src','criancaM_web.png')
            }else if(idade <= 21){
                //Adolesnte
                img.setAttribute('src','adolescenteM_web.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src','adultoM_web.png')
            }else{
                //Idoso
                img.setAttribute('src','idosoM_web.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //Para adicionar elemnto abaixo
    }
}
