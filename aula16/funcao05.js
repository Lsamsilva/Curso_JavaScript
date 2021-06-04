function fatorial(n){
    if (n == 1){
        return 1
    }else{
        return n * fatorial(n-1) // RECURSIVIDADE
    }
}
    console.log(fatorial(5))


/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4! 
n! = n x (n-1)!
*/
/*
1º n recebeu 5
2º return 5* fatorial(4) --> 5 * 4 * fatorial(3) --> 5 * 4 * 3 * fatorial(2) --> 5 * 4 * 3 * 2 * fatorial(1) 
*/