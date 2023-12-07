const uno = [
    ' ------- ',
    '|       |',
    '|   *   |',
    '|_______|' ];

const dos = [
    ' ------- ',
    '|       |',
    '| *  *  |',
    '|_______|' ];

const tres = [
    ' ------- ',
    '|     * |',
    '|   *   |',
    '|_*_____|' ];

const cuatro = [
    ' ------- ',
    '| *   * |',
    '|       |',
    '|_*___*_|' ];

const cinco = [
    ' ------- ',
    '| *   * |',
    '|   *   |',
    '|_*___*_|' ];

const seis = [
    ' ------- ',
    '| *   * |',
    '| *   * |',
    '|_*___*_|' ];

function imprimirDado(numero) {
    numero.forEach(element => {
        console.log(element);

    });

}

function tirarDado() {
    tiro = Math.floor(Math.random()*6 + 1);
    console.log(tiro);
    switch(tiro) {
        case 1: 
            //imprimirDado(uno);
            console.log(uno)
            break;
        case 2: 
            //imprimirDado(dos);
            break;
        case 3: 
            //imprimirDado(tres);
            break;
        case 4: 
            //imprimirDado(cuatro);
            break;
        case 5: 
            //imprimirDado(cinco);
            break;
        case 6: 
            //imprimirDado(seis);
            break;
        
    }; 

    

}