document.write('<h3><center>20 Termos da Sequência de Fibonacci</h3></center>')
document.write('<center><img src="../images/gatinho.gif" alt=""</center>' + '<br>')

//Preenchendo a função Fibonacci
let fibonacci = []

fibonacci[0] = 0
fibonacci[1] = 1

//Laço para percorrer e prencher a função
for (let i = 2; i < 20; i++)
{
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
document.write(fibonacci)