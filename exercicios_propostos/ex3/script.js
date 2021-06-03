function contar(){
    //Variáveis que capturam o conteúdo da caixa (sempre será String)
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res') 
    //Variáveis que capturam o valor que foi colocado nas Caixas da página
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível Contar! Faltam Dados'
    }
    else{
        /*alert('Tudo ok!') -- pode digitar só alert ao inves de escrever window.alert 
        PASSO PARA CHECAGEM SE IF ESTÁ FUNCIONANDO*/

        res.innerHTML = 'Contando: <br>' //tag br pode ser utilizada pois se está trabalhando com innerHTML
        if(p <= 0){ //Se o passo for 0 impossível fazer a soma ou subtração para o próximo valor. Navegador fica travado
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1            
        }
        if(i < f) { //o contador só faz sentido neste caso para contagem crescente, já que c <= f (sendo c igual ao inicío), portanto, inicio < final
            for (var c = i; c <= f; c += p){ //c = contador 
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }else{ //código para contar do maior para o menor, ordem decrescente (inicio(c) >= fim)
            for(var c = i; c >= f; c -= p){ /*neste caso o contador deverá 'perder' o passo, ou seja, ir do número maior (que é o início) até o número menor (que é o fim)*/
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        //res.innerHTML += `${c} \u{1F449}` como o comando se repete nas duas estruturas (if e else) poderia colocar ele do lado de fora para deixar o código mais limpo      
    } 
}
