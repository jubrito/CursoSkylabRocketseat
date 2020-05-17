// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
    const response = await delay();
    console.log('1s');
    const response1 = await delay();
    console.log('2s');
    const response2 = await delay();
    console.log('3s');
}
umPorSegundo();

import axios from 'axios';
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}
getUserFromGithub('jubrito');
getUserFromGithub('nomegithubnaoexistente');

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.warn('Repositório não existe');
        }
    }
}
Github.getRepositories('jubrito/CursoSkylabRocketseat');
Github.getRepositories('jubrito/dslkvmskv');

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}
buscaUsuario('jubrito');