
function verificarIdade() {
  let idade = document.getElementById("idade").value;
  let resultado = document.getElementById("resultado");

  let anoAtual = new Date().getFullYear();
  let anoNascimento = new Date(idade).getFullYear();
  idade = anoAtual - anoNascimento;

console.log("Idade calculada: " + idade);

  if (idade >= 18 && idade <= 70) {
    console.log(idade + ' anos, voto obrigatório.');
    resultado.textContent = idade + " anos, voto obrigatório.";
    resultado.style.color = "green";
  } else if ((idade >= 16 && idade < 18) || idade > 70) {
    resultado.textContent = idade + " anos, voto facultativo.";
    console.log(idade + ' anos, voto facultativo.');
    resultado.style.color = "orange";
  } else {
    resultado.textContent = idade + " anos, não pode votar.";
    console.log(idade + ' anos, não pode votar');
    resultado.style.color = "red";
  }
}
