function calcularNota() {
    let nota1 = document.getElementById("nota1");
    let nota2 = document.getElementById("nota2");
    let nota3 = document.getElementById("nota3");

    let errorNota1 = document.getElementById("errorNota1");
    let errorNota2 = document.getElementById("errorNota2");
    let errorNota3 = document.getElementById("errorNota3");

    // Limpiar mensajes previos
    errorNota1.textContent = "";
    errorNota2.textContent = "";
    errorNota3.textContent = "";

    let valor1 = parseFloat(nota1.value) || 0;
    let valor2 = parseFloat(nota2.value) || 0;
    let valor3 = parseFloat(nota3.value) || 0;
    
    let valido = true;

    // Validaciones
    if (valor1 < 0 || valor1 > 30) {
        errorNota1.textContent = "Ingrese un valor entre 0 y 30.";
        valido = false;
    }
    if (valor2 < 0 || valor2 > 30) {
        errorNota2.textContent = "Ingrese un valor entre 0 y 30.";
        valido = false;
    }
    if (valor3 < 0 || valor3 > 40) {
        errorNota3.textContent = "Ingrese un valor entre 0 y 40.";
        valido = false;
    }

    if (!valido) return;

    let notaFinal = valor1 + valor2 + valor3;
    let mensaje = "";

    if (notaFinal >= 0 && notaFinal <= 59) {
        mensaje = "Reprobado";
    } else if (notaFinal >= 60 && notaFinal <= 79) {
        mensaje = "Bueno";
    } else if (notaFinal >= 80 && notaFinal <= 89) {
        mensaje = "Muy Bueno";
    } else if (notaFinal >= 90 && notaFinal <= 100) {
        mensaje = "Sobresaliente";
    }

    alert(`Nota Final: ${notaFinal}%\nResultado: ${mensaje}`);
}

function limpiarCampos() {
    document.getElementById("notaForm").reset();
    document.getElementById("errorNota1").textContent = "";
    document.getElementById("errorNota2").textContent = "";
    document.getElementById("errorNota3").textContent = "";
}
