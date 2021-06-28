// 1. Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function execute(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number') reject('Informe apenas números');
    if(typeof b !== 'number') reject('Informe apenas números');
    if(typeof c !== 'number') reject('Informe apenas números');
    const calc =  (a + b) * c;
    if(calc < 50) reject('Valor muito baixo');
    resolve(calc);
  })
}

module.exports = {
  execute,
}