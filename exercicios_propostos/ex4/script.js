function tabuada(){
    var numero = document.getElementById('txtnumero')    
    var tab = document.getElementById('seltab')

    if(numero.value.length == 0){
        window.alert('Valor Inválido! Por favor digite um número.')
        
    }else{
       var n = Number(numero.value)
       tab.innerHTML = '' //antes de começar a mostrar a tabuada limpa-se a tela de select com valor vazio para não 'encavalar' resultados
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')//para adicionar elementos no select do HTML. Criação do Option de forma dinâmica
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}` /*Os options tem que ter valor principalmente por causa de outras linguagens como PHP; para JS não faz tanto sentido
            Ao selecionar primeiro item na tabela da tabuada é conferido um valor a ela e assim sucessivamente*/
            tab.appendChild(item) /*variável para colocar o valor das opções dentro da caixa select criada.
            appendChild adiciona um elemento filho*/

        }
    }
}
