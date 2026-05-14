function test(notas, bonus, respuestaEsperada) {
    try {
        const analisis = calcularInstanciaAlumno(notas, bonus);
        console.log("--------------")
        if (analisis === respuestaEsperada) {
            return console.log("test pasó correctamente");
        } else {
            return console.log("test falló");
        }
        
    } catch (error) {
        console.error(error);
    }
}

function calcularInstanciaAlumno(notas, bonus) {
    try {
        if (!validarInputs(notas, bonus)) return false
        
        const notaFinal = calcularPromedio(notas, bonus);

        if (notaFinal < 4) {
            return "RECURSA";
        } else if (notaFinal >= 4 && notaFinal < 7) {
            return "EXAMEN";
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
test(["fe"],false,false); // error en la entrada de datos entonces es false esperado y mando false



