let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = [] //Vetor/Array para fazer a análise de dados

function isNumero(n) { //função para verificar se o valor colocado na caixa de números realmente é um número
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true    
    }else{
        return false
    }
}

function inLista(n , l) { //função para verificar se o número está na lista
   if(l.indexOf(Number(n)) != -1){ //se o valor de n não for encontrado na lista 
        return true
   }else{
       return false
   }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //só vai adicionar se a entrada na caixa de número for um número e não estiver na lista
        //window.alert('Tudo ok') Para testar se está funcionando
        valores.push(Number(num.value)) //adicionar ao Vetor os valores digitados na caixa de número
        let item = document.createElement('option') //para adicionar os valores do vetor no select para isso é preciso criar dinamicamente uma tag option
        item.text = `Valor ${num.value} adicionado.` //para adicionar o valor no seletor. É o que vai aparecer dentro da option (que está dentro de option)
        lista.appendChild(item)/*para adicionar na lista pois foi criada dinamicamente a tag option mas não se especificou "onde" a tag está.
        Agora com este comando sabe-se que ela está na lista associada ao select*/
        res.innerHTML=''//para limpar caso se adicione número após já ter feito uma análise

    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''//para apagar/limpar o valor colocado dentro da caixa de números
    num.focus()//para colocar o foco na caixa de número - como se tivesse clicado dentro
}

function finalizar() {
    if(valores.length == 0){ //para verificar que a caixa de valores não está vazia
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length //total de elementos no vetor valores[]

        let maior = valores[0] //quando se adiciona 1 número somente ele é o maior e o menor
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let posicao in valores){ //Laço de Percurso (varrer o vetor inteiro) para cada posição em valores um teste será feito
            if(valores[posicao] > maior){
                maior = valores[posicao]
            }
            if(valores[posicao] <= menor){
                menor = valores[posicao]
            }
            soma += valores[posicao]
        }

        res.innerHTML=''//para zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        media += soma/total
        res.innerHTML += `<p>A média é igual a ${media}</p>`
    }
}