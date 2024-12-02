// Dados das variáveis
const temperaturas = [20, 22, 25, 28, 30, 32, 35, 37, 30, 25, 22, 20];
const vendasSorvetes = [15, 16, 18, 20, 22, 24, 26, 28, 22, 18, 16, 15];

// Função para calcular a média
function calcularMedia(arr) {
  const soma = arr.reduce((acc, val) => acc + val, 0);
  return soma / arr.length;
}

// Função para calcular o coeficiente de correlação de Pearson
function calcularCorrelacao(x, y) {
  const mediaX = calcularMedia(x);
  const mediaY = calcularMedia(y);

  const numerador = x.reduce((acc, xi, i) => acc + (xi - mediaX) * (y[i] - mediaY), 0);
  const denominadorX = Math.sqrt(x.reduce((acc, xi) => acc + Math.pow(xi - mediaX, 2), 0));
  const denominadorY = Math.sqrt(y.reduce((acc, yi) => acc + Math.pow(yi - mediaY, 2), 0));

  return numerador / (denominadorX * denominadorY);
}

const correlacao = calcularCorrelacao(temperaturas, vendasSorvetes);

console.log(`A correlação entre a temperatura e as vendas de sorvetes é: ${correlacao.toFixed(2)}`);
