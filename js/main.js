let arrayIndicador = [];
const numerosFila1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosFila2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
const numerosFila3 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
const numerosFila4 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
const numerosFila5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
const numerosFila6 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
const numerosFila7 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
const numerosFila8 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
const numerosFila9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];

function aleatorio() {
    return Math.floor(Math.random() * 9) + 1;
}

function armarArrayInicial () {
        const numerosAleatorios = [];
        while (numerosAleatorios.length < 9) {
            const numero = aleatorio();
            if (!numerosAleatorios.includes(numero)) {
                numerosAleatorios.push(numero);
            }
        }
        return numerosAleatorios;
}


arrayIndicador = armarArrayInicial();

function crearNuevaFila1() {
    return numerosFila1.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });
};

function crearNuevaFila2() {
    return numerosFila2.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });
};

function crearNuevaFila3() {
    return numerosFila3.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });
};

function crearNuevaFila4() {
    return numerosFila4.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });
};

function crearNuevaFila5() {
    return numerosFila5.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });
};

function crearNuevaFila6() {
    return numerosFila6.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });

};

function crearNuevaFila7() {
    return numerosFila7.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });
};

function crearNuevaFila8() {
    return numerosFila8.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });
};

function crearNuevaFila9() {
    return numerosFila9.map(function (elemento) {
        if (elemento === 1) {
            return arrayIndicador[0];
        } else if (elemento === 2) {
            return arrayIndicador[1];
        } else if (elemento === 3) {
            return arrayIndicador[2];
        } else if (elemento === 4) {
            return arrayIndicador[3];
        } else if (elemento === 5) {
            return arrayIndicador[4];
        } else if (elemento === 6) {
            return arrayIndicador[5];
        } else if (elemento === 7) {
            return arrayIndicador[6];
        } else if (elemento === 8) {
            return arrayIndicador[7];
        } else {
            return arrayIndicador[8];
        }
    });
};

let filaFinal1 = crearNuevaFila1();

let filaFinal2 = crearNuevaFila2();

let filaFinal3 = crearNuevaFila3();

let filaFinal4 = crearNuevaFila4();

let filaFinal5 = crearNuevaFila5();

let filaFinal6 = crearNuevaFila6();

let filaFinal7 = crearNuevaFila7();

let filaFinal8 = crearNuevaFila8();

let filaFinal9 = crearNuevaFila9();

const arrayFilasFinales = [filaFinal1, filaFinal2, filaFinal3, filaFinal4, filaFinal5, filaFinal6, filaFinal7, filaFinal8, filaFinal9];

// console.log(arrayFilasFinales);

function digitos() {

    for (let i = 1; i<=9; i++) {
        let numero = document.createElement("div");
        numero.id = i;
        numero.innerText = i;
        numero.classList.add("numeros");
        document.getElementById("digitos").appendChild(numero);
    }
};

function tablero() {

    for (let c = 0; c < 9; c++) {
        const filaFinal = arrayFilasFinales[c];
        for (let i = 0; i < 9; i++) {
            let cuadrado = document.createElement("div");
            cuadrado.id = "cuadrado"+(c+1)+"linea"+(i+1);
            cuadrado.classList.add("cuadrados");
            cuadrado.innerHTML = filaFinal[i];
            document.getElementById("board").appendChild(cuadrado);
        }
    }
};

function agregarBordes() {

    for (let c = 1; c <= 9; c++) {
        let lineaTres = document.getElementById("cuadrado"+c+"linea3")
        let lineaSeis = document.getElementById("cuadrado"+c+"linea6")
        lineaTres.classList.add("linea-vertical")
        lineaSeis.classList.add("linea-vertical")
    }

    for (let c = 1; c <= 9; c++) {
        let lineaUno = document.getElementById("cuadrado3linea"+c)
        let lineaSiete = document.getElementById("cuadrado6linea"+c)
        lineaUno.classList.add("linea-horizontal")
        lineaSiete.classList.add("linea-horizontal")
    }
};

let cuadradosOcultos = [];

function taparNumeros() {
    let numeroA = 0;
    let numeroB = 0;
    let cuadradoAleatorio;

    do {
        numeroA = aleatorio();
        numeroB = aleatorio();
        cuadradoAleatorio = "cuadrado"+numeroA+"linea"+numeroB
    } while (cuadradosOcultos.includes(cuadradoAleatorio));
   

    let divOriginal = document.getElementById(cuadradoAleatorio);
    divOriginal.classList.add("tapados")

    let numeroOculto = divOriginal.innerText;

    divOriginal.innerText = "";
    
    let divOculto = document.createElement("div");
    divOculto.innerText = numeroOculto;

    divOculto.classList.add("tapado");

    divOriginal.appendChild(divOculto);

    cuadradosOcultos.push(cuadradoAleatorio);

};

function dificultad() {
    while (cuadradosOcultos.length < 40) {
        taparNumeros();
    }

    const numerosTableros = document.querySelectorAll(".cuadrados");
    numerosTableros.forEach((numero) => {
    numero.addEventListener("click", compararNumeros);
    });

};

function seleccionarNumero(event) {

    numeroActual = event.currentTarget;
    const numeroPrevio = document.querySelector(".numero-seleccionado");
    
    if (numeroPrevio !== numeroActual) {

        if(numeroPrevio) {
        numeroPrevio.classList.remove("numero-seleccionado");
        }
        numeroActual.classList.add("numero-seleccionado");
    
    }
    console.log(numeroActual.innerText);
    return numeroActual.innerText;
};



window.onload = function() {
    digitos();

    const numeros = document.querySelectorAll(".numeros");
        numeros.forEach((numero) => {
        numero.addEventListener("click", seleccionarNumero);
    });

    tablero();
    agregarBordes();
    setTimeout(dificultad, 10);

    const numeroActual = "";

};

function compararNumeros(event) {
    
    const cuadradoSeleccionado = event.currentTarget;
    const contenido = cuadradoSeleccionado.innerText;

    if(contenido.length == "0") {
        const contenidoOculto = cuadradoSeleccionado.children[0]
        console.log(`el numero oculto es ${contenidoOculto.textContent}`);
        
        if(numeroActual.innerText === contenidoOculto.textContent) {
            contenidoOculto.classList.remove("tapado");
            contenidoOculto.classList.add("destapado");
            console.log("Luchito lo estas logrando")
        } else {
            Toastify({
                text: "Número incorrecto, sigue intentando",
                duration: 2000,
                gravity: "bottom",
                backgroundColor: "red",
            }).showToast();
        }
    } else {
        console.log(`Aca no se hace nada.`);
    }


};
