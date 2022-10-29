var muestraFoto = document.getElementById("visor");

document.getElementById("boton-veronica").addEventListener("click", function(){
    muestraFoto.src = "images/veronica-reyes.jpg";
});
document.getElementById("boton-ana").addEventListener("click", function(){
    muestraFoto.src = "images/ana-ramirez.jpg";
});
document.getElementById("boton-carlos").addEventListener("click", function(){
    muestraFoto.src = "images/carlos-terrazas3.jpg";
});
/*****************************************/
/*document.getElementById("main-header").addEventListener("click",function(){
    document.body.style.fontSize="50px"; //asi se modifica una propiedad de estilo 
})
*/
/*****************************************************/

                                                            
let bOscuro = document.getElementById("boton-oscuro");
let bClaro = document.getElementById("boton-claro");
let nosotros = document.getElementById("nosotros");

bOscuro.addEventListener("click", function(){
    nosotros.style.backgroundColor = "#000000";
    nosotros.style.color = "#FFFFFF";
});

bClaro.addEventListener("click", function(){
    nosotros.style.backgroundColor = "#F78B6D";
    nosotros.style.color = "#333333";
});
/************************************/
let frases =[];
frases[0]="Solo se que nada se";
frases[1]="Vine, vi venci";
frases[2]="En tiempos de crisis la imaginacion es mejor que la inteligencia"
frases[3] = "Si quieres cambiar el mundo cambiate a ti mismo";

let botonFrase1 = document.getElementById("frase1");
let botonFrase2 = document.getElementById("frase2");
let botonFrase3 = document.getElementById("frase3");
let botonFrase4 = document.getElementById("frase4");
let fraseDia = document.getElementById("frase-dia");

botonFrase1.addEventListener("click", function(){
    fraseDia.innerHTML = frases[0];
})
botonFrase2.addEventListener("click", function(){
    fraseDia.innerHTML = frases[1];
})
botonFrase3.addEventListener("click", function(){
    fraseDia.innerHTML = frases[2];
})
botonFrase4.addEventListener("click", function(){
    fraseDia.innerHTML = frases[3];
})
/**let fraseDia = document.getElementById("frase-dia");*/

/*********galeria de cientificas con botones***** */
let mujer =[];
mujer[0]= "maria-isabel-quiroga.jpg";
mujer[1]= "laura-rodriguesz-dulanto.jpg";
mujer[2]= "maria-reiche.jpg";

let bretroceder = document.getElementById("boton-retroceder");
let bavanzar = document.getElementById("boton-avanzar");
let muestra = document.getElementById("muestra");

bavanzar.addEventListener("click",function(){
    posicion++;
    if(posicion==3){
        posicion=0;
    }
    muestra.src = mujer[posicion];
})
bretroceder.addEventListener("click",function(){
    posicion--;
    if(posicion==-1){
        posicion=2;
    }
    muestra.src = mujer[posicion];
})





