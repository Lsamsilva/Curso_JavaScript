function parimp(n){
    if(n%2==-0){
        return 'Par'
    }else{
        return 'ímpar'
    }
}
let res = parimp(4) 
console.log(res)
//Poderia ser escrito da seguinte forma: console.log(parimp(4)) -- sem escrever as duas linhas acima