function soma(n1=0,n2=0){  // está igualado a 0 para que se por ventura um dos parâmetros não for passado/declarado na chamada serão considerados igual a 0
    return n1+n2
}
console.log(soma(2,5))
/*Se por acaso só um valor/parâmetro da função for definido: console.log(soma(2)) o parâmetro n2 será indefinido.
Assim aparecerá no console NaN que significa Not a Number = 2 + undefinied */
