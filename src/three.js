// 3. Reescreva o código do exercício anterior para que utilize async/await .

const { execute } = require('./one');

async function calculate() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);
  try {
    const result = await execute(a, b, c);
    console.log(result);
  } catch(err) {
    console.log(err);
  }
}

calculate();