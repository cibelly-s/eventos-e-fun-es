/* 
Alert () alerta
Prompt () obriga a aparecer
Console.clear () limpa o console
Console.log () aparece no console
Confirm () confirma uma informação
For () 
While () quando
If () se 
Else () se não

SINTAXA FUNÇO~ES

FUNÇÃO SIMPLES.
 
// na funçao, passa o nome pra ela e oq ela ira fazer, passando essa informaçao dentro de chaves

function nomeDaFunção () {
    //oq será feito
}
*/

/* function  saudacao  (){
    alert("Bem vindo ao meu site")
}

saudacao() */

/* Função com parametros
*/
/* 
function soma(valor1, valor2){
    let resultado = valor1 + valor2
    return resultado
    //para retornar algo dentro de uma funçao usamos o "return"
}

console.log(soma(50, 70));
console.log(soma(40, 20));
console.log(soma(10, 10));

====== DOBRO ============

function dobro(n1){
    let resultado = n1 +n1;
    return resultado
}

console.log(dobro(4));

 */



function soma(){
    let valor1 = Number (prompt("Digite aqui o valor"));
    let valor2 = Number (prompt("Digite o segundo valor"));
    let resultado = valor1 + valor2;
   
    alert(`O valor é ${resultado}`);
}
// ====================================== DOBRO ===================================================

function dobro(){
    let numero = prompt ("Digite o numero");
    let dobro = numero * 2;
    alert(dobro);
 
}

console.log(dobro(4));

// ====================================== SAUDAÇÃO ==================================================
                                         
function saudacao(){                    
    let nome = prompt("Didite seu nome");
    alert(`Olá ${nome}, seja bem vindo(a)😊`);
}                                        
                                         
saudacao()                               
                                         
                                          
// ====================================== LOJA DE DESCONTO =======================================


function desconto(){
    let valor = Number (prompt("Qual o valor do produto"));
    let porcentagem = prompt("Qual é a porcentagem?");
    let desconto = valor - (valor * (porcentagem / 100));
    
    console.log(`${desconto}`);
}

desconto()

