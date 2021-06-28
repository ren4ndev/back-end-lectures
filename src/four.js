// 1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// 2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
const fs = require('fs');

//  1
const readAll = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf-8', (err, content) => {
      if(err) reject(err);
      resolve(content);
    })
  })
}

readAll()
  .then((result) => JSON.parse(result))
  .then((arr) => {
    arr.forEach((item) => console.log(`${item.id} - ${item.name}`))
  })
  .catch((err) => console.log(err.message));

//  2
const readById = (id) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf-8', (err, content) => {
      if(err) reject(err);
      
      const arr = JSON.parse(content);
      const person = arr.find((person) => person.id === id);
      
      if(!person) reject('id não encontrado');
      resolve(person);
    })
  })
}

readById('1')
  .then((result) => console.log(`${result.id} - ${result.name}`))
  .catch((err) => console.log(err));