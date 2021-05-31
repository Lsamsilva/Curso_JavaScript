var idade = 16
console.log(`Você tem ${idade} anos`)
if (idade<16){
    console.log('Não vota.') 
}else{
    if(idade<18 || idade>65){  //(idade>=16 && idade<18) desnecessário colocar idade>=16 pois na primeira condição já engloba este parâmetro: se a idade não é menor que 16 obviament ela é maior que 16 - está implícito
        console.log('Voto Opcional.')
    }else{
        console.log('Voto Obrigatório.')
    }   
}

/* Utilizando else if(condição){bloco de comando} utilizam-se menos linhas -- excluí-se um bloco de comando
if (idade<16){
    console.log('Não vota.')    
}else if (idade<18){
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório.')
}
*/