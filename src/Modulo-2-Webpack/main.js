// import teste, { sub as subFunction } from './testeWebpack';
// import testeFunction, { sub as subFunction } from './testeWebpack';
// Com export default podemos colocar outro nome (por exemplo, testeFunction), sem default usamos o "as"
import * as funcoes from './testeWebpack'
// funcoes é um objeto e podemos acessar acada metodo pelo nome

console.log(funcoes.soma(1,2));
console.log(funcoes.sub(1,2));
console.log(funcoes.mult(1,2));