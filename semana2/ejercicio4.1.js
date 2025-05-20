const { ask } = require('../helpers/input');

function nombresConVocal (nombres){

    const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    const resultado = [];

    for(let i = 0; i < nombres.lenght; i++){
        let primeraLetra = nombres[i][0].toLowerCase;
        if(vocales.includes(primeraLetra)){
            resultado.push(nombres[i]);
        }
    }
    return resultado;

}
async function main() {
    const names = ["Ana", "Roberto", "Luis", "Mariana", "Sol"];
    
    
}
main();