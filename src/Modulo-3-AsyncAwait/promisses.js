// Forçando que algo demore para executar, ex: chamada a API
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

/*********************** 1. ANTES DO ES8 ***********************

1.
minhaPromise1()
    .then(response => {
    //Aparece um OK depois de 2 segundos (2000 milisegundos)
    console.log(response);
    })
    .catch(err => {

    });

minhaPromise2()
    .then(response => {
        console.log(response);
    })
    minhaPromise2()
        .then(response => {
            console.log(response);
        })
        minhaPromise2()
            .then(response => {
                console.log(response);
            })
*/


/*********************** 2. DEPOIS DO ES8 ***********************/

// await =~ .then
async function executaPromise1() {
    // minhaPromise1().then(response => ...);
    const response = await minhaPromise();
    console.log(response);
}
executaPromise1();

async function executaPromise2() {
    const response = await minhaPromise();
    console.log(`Ira printar OK depois de 2 segundos ${response}`);
    const response2 = await minhaPromise();
    console.log(`Ira printar OK depois de 4 segundos ${response2}`);
    const response3 = await minhaPromise();
    console.log(`Ira printar OK depois de 6 segundos ${response3}`);
}
executaPromise2();

// Quando definimos uma async function a própria função vira uma promisse
// então conseguimos esperar o resultado da função executaPromise utilizando:
    // .then: executaPromise2().then(); 
    // await: await executaPromise2();  Neste caso, apenas se isso estiver dentro de uma função async


/* Em Arrow Functions */
const executaPromiseArrowFunction = async () => {
    console.log(await minhaPromise());
    console.log("(Arrow Functions)");
} 
executaPromiseArrowFunction();
