let valor1 = null;
let valor2= null;
let res = document.getElementById("visor");

let vres = "";
let botaoClicado;
let resultado;
let um, dois, tres, quatro, cinco, seis, sete, oito, nove, zero;
let soma, sub, mult, div;
let limpa, igual;

document.onclick = function mostrarNum(event){
    um = document.getElementById("um").id;
    dois = document.getElementById("dois").id;
    tres = document.getElementById("tres").id;
    quatro = document.getElementById("quatro").id;
    cinco = document.getElementById("cinco").id;
    seis = document.getElementById("seis").id;
    sete = document.getElementById("sete").id;
    oito = document.getElementById("oito").id;
    nove = document.getElementById("nove").id;
    zero = document.getElementById("zero").id;

    soma = document.getElementById("soma").id;
    sub = document.getElementById("sub").id;
    mult = document.getElementById("mult").id;
    div = document.getElementById("div").id;

    igual = document.getElementById("igual").id;
    limpa = document.getElementById("limpa").id;

    if(!isNaN(vres)){
        if (event.target.id == um){
            vres += 1;
            res.textContent = vres;
        }
        else if (event.target.id == dois){
            vres += 2;
            res.textContent = vres;
        }
        else if (event.target.id == tres){
            vres += 3;
            res.textContent = vres;
        }
        else if (event.target.id == quatro){
            vres += 4;
            res.textContent = vres;
        }
        else if (event.target.id == cinco){
            vres += 5;
            res.textContent = vres;
        }
        else if (event.target.id == seis){
            vres += 6;
            res.textContent = vres;
        }
        else if (event.target.id == sete){
            vres += 7;
            res.textContent = vres;
        }
        else if (event.target.id == oito){
            vres += 8;
            res.textContent = vres;
        }
        else if (event.target.id == nove){
            vres += 9;
            res.textContent = vres;
        }
        else if (event.target.id == zero){
            vres += 0;
            res.textContent = vres;
        }
        else if (event.target.id == soma) {
     
     valor1 = Number(vres);
     vres = "";
     res.textContent = vres;
     botaoClicado = "soma";

   } else if (event.target.id == sub) {
     botaoClicado = "sub";
     valor1 = Number(vres);
     vres = "";
     res.textContent = vres;

   } else if (event.target.id == mult) {
     botaoClicado = "mult";
     valor1 = Number(vres);
     vres = "";
     res.textContent = vres;
     
   } else if (event.target.id == div) {
     botaoClicado = "div";
     valor1 = Number(vres);
     vres = "";
     res.textContent = vres;
     
   } else if (event.target.id == limpa) {
     vres = "";
     res.textContent = vres;
     valor1 = 0;
     valor2 = 0;
   } else if (event.target.id == igual) {
     valor2 = Number(vres);
     vres = "";
     resultado = calculo(valor1, valor2 );
     
     res.textContent = resultado;

     valor1 = 0;
     valor2 = 0;
   }
 }
 function calculo(op1, op2){
     if(botaoClicado === "soma"){
         return op1 + op2;
     }else if(botaoClicado === "sub"){
         return op1 - op2;
     }else if(botaoClicado === "mult"){
         return op1 * op2;
     }else if(botaoClicado === "div"){
         return op1 / op2;
     }
     
};

};