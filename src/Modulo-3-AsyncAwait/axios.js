import axios from 'axios';
/* Axios: dá acesso a API para trabalharmos com requisições assíncronas, protocolos HTTPs 
por exemplo outras APIs com servidores back-end */

/* Todas as funções do axios (ex: axios.get) retornam promisses, por isso trabalhamos com a sintaxe do async/await*/

// REQUISIÇÃO A API 
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);
        } catch (err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo("jubrito");