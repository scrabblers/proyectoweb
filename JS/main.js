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
frases[0]="STEAM bien enfocado ayuda a desarrollar un pensamiento critico, creativo, empatico y solidario en los estudiantes";
frases[1]="El enfoque STEAM contextualiza todos los aprendizajes.";
frases[2]="Los docentes deben tener nuevas metodologias de enseñanza integradas, transversales y contextualizada";
frases[3]="STEAM nos permite tener una vision integrada de la realidad, muy por encima de las disciplinas";

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

//*********galeria imagenes tecnologicas con botones***

let paisajes = [];
paisajes[0] = "images/i1.jpeg";
paisajes[1] = "images/i2.jpeg";
paisajes[2] = "images/i3.jpeg";
paisajes[3] = "images/i4.jpeg";
paisajes[4] = "images/i5.jpeg";

let bRetroceder = document.getElementById("boton-retroceder");
let bAvanzar = document.getElementById("boton-avanzar");
let muestra = document.getElementById("muestra");
let cajaP = document.getElementById("caja-posicion");
let posicion = 0;

actualizarImagen();

function actualizarImagen(){
    cajaP.innerHTML = posicion + 1;
    muestra.src = paisajes[posicion];
}

bAvanzar.addEventListener("click", function(){
        posicion++;
        if(posicion == 5){
            posicion = 0;
        }
        actualizarImagen();
}); 
bRetroceder.addEventListener("click", function(){
    posicion--;
    if(posicion == -1){
        posicion = 4;
    }
    actualizarImagen();
}); 

//NUMEROS ALEATORIOS
//console.log(Math.floor(Math.random() * 20 ));
let nombrePersonaje = document.getElementById("nombre-personaje");
let personajes = [];
personajes[0] = "En STEAM las carreras y oportunidades laborales han sido más para hombres, debido a clichés y paradigmas de la sociedad.";
personajes[1] = "Este modelo educativo se centra en la capacidad de innovar, inventar, y resolver los problemas, con vistas a las profesiones del futuro.";
personajes[2] = "La integración de las mujeres a STEAM es muy importante, pues abre paso al cierre de la brecha de género que se vive actualmente en la fuerza laboral";
personajes[3] = "Promover una mentalidad de crecimiento:Hay que combatir el estereotipo negativo de pensar que las niñas tienen poca capacidad para ser exitosas.";
personajes[4] = "Promover historias de mujeres exitosas:La mejor inspiración es el tener ejemplos de mujeres que han roto paradigmas. Mostrar casos de éxito de mujeres. Es vital hacer énfasis en los retos a los que se enfrentaron, como rompieron esos clichés";
personajes[5] = "Asumir el valor de los errores:Enseñar a nuestras hijas a ser valientes, más no perfectas. Las educamos para no fallar y la educación en STEAM propone un aprendizaje basado en la solución de problemas, lo que implica entender, construir, probar y mejorar";
personajes[6] = "Combatir falsos estereotipos sobre estas carreras:Geeks, nerds…estos calificativos han sido usados para describir a gente que estudia estas carreras. Es momento de borrar estos estereotipos y dejar las etiquetas";
personajes[7] = " Crear un ambiente que promueva a las ciencias. Poner al alcance de los niños el estudiar estas carreras. Demostrarles que culturalmente también es posible y bien visto,";
personajes[8] = "Diversidad en la industria:La brecha de género en actividades científicas y tecnológicas es un reto importante para todas las sociedades";
personajes[9] = "las oportunidades para las niñas de lograr una carrera exitosa en ciencias son limitadas y la escasez de buenos ejemplos genera un círculo vicioso difícil de romper.";


let aleatorio = Math.floor(Math.random() * 5 )
nombrePersonaje.innerHTML = personajes[aleatorio];

//INTERVALOS DE TIEMPO - setTimeout
let personajedia = document.getElementById("personajedia");
function cambiarColorPersonaje(){
    personajedia.style.backgroundColor = "#000000";
    personajedia.style.color = "#FFFFFF";
}
setTimeout(cambiarColorPersonaje, 5000);

//INTERVALOS DE TIEMPO - setInterval
function cambiarPersonaje(){
    let aleatorio = Math.floor(Math.random() * 5 )
    nombrePersonaje.innerHTML = personajes[aleatorio];
}
setInterval(cambiarPersonaje, 1000);


