function test(notas, bonus, respuestaEsperada) {
    try {
        const analisis = calcularELDestinoDelAlumno(notas, bonus);
        if (analisis === respuestaEsperada) {
            return console.log("test correctisimo");
        } else {
            return console.log("test fallo D;");
        }
    } catch (error) {
        console.error(error);
    }
}

function calcularELDestinoDelAlumno(notas, bonus) {
    try {
        if (!validarInputs(notas, bonus)) {
            return console.log("error en la entrada de datos");
        }
        const notaFinal = calcularPromedio(notas, bonus);

        if (notaFinal < 4) {
            return "RECURSA";
        } else if (notaFinal >= 4 && notaFinal < 7) {
            return "APROBADO";
        } else {
            return "PROMOCIONA";
        }

    } catch (error) {
        console.error(error);
    }
}
function validarInputs(notas, bonus) {
    const notasValidas = notas.every(nota =>
        typeof nota === "number" &&
        nota >= 1 && nota <= 10
    );
    if (notas.length === 0) return false
    if (typeof bonus !== "boolean" || !notasValidas) return false
    return true;
}

function calcularPromedio(notas, bonus) {
    const suma = notas.reduce((acumulador, elementoActual) => {
        return acumulador + elementoActual;
    }, 0);
    let promedio = suma / notas.length

    if (bonus && promedio >= 4 && !(promedio + 1 > 10)) {
        promedio++;
    }
    return promedio;
}
test([7,7,7], false, "PROMOCIONA"); //promedio 8, PROMOCIONA test correcto
test([6,6,6], true, "PROMOCIONA"); //promedio 6, PROMOCIONA (6+1) test correcto
test([3,3,3], true,"RECURSA"); //promedio 3, RECURSA test correcto
test([10,10], true, "PROMOCIONA") // porque dos notas
test(["fe"],false,"RECURSA");



