
    function verificarNumero() {
      let numero = document.getElementById("numero").value;
      let resultado = document.getElementById("resultado");

      numero = Number(numero);

      if (numero > 0) {
        resultado.textContent = "O número é positivo";
        resultado.className = "resultado positivo";
      } else if (numero < 0) {
        resultado.textContent = "O número é negativo";
        resultado.className = "resultado negativo";
      } else {
        resultado.textContent = "O número é zero";
        resultado.className = "resultado zero";
      }
    }
 