/* Usando o arquivo "functions.js": */

// 1.1 Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario e chame a função ```info()```**
import ClasseUsuario from './functions'
ClasseUsuario.info();

// 1.2 Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;**
import * as funcoes from './functions'
console.log(funcoes.idade);

// 1.3 Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade para ```IdadeUsuario```**
import Usuario, {idade as idadeUsuario} from './functions';
console.log(Usuario.info());
console.log(idadeUsuario);


// No main o caminho é "./Exercicios/Modulo-2/functions" porém aqui é ./functions