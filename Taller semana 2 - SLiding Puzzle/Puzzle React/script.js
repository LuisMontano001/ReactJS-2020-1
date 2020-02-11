const elementosCuadros = document.querySelectorAll('.pieza');
const botonReiniciar = document.querySelector('#reorganizar');

const TAMANIO = 3;

const matriz = [];


const inicializar = () => {
    let contador = 0;
    for (let indiceFila = 0; indiceFila < TAMANIO; indiceFila++) {
        matriz[indiceFila] = [];
        for (let indiceColumna = 0; indiceColumna < TAMANIO; indiceColumna++) {
            matriz[indiceFila][indiceColumna] = {
                elemento: elementosCuadros[contador],
                vacio: contador === TAMANIO * TAMANIO - 1
            };
            contador++;
        }
    }
    const clasesPiezas = [
        'imagenSuperiorIzquierda',
        'imagenSuperiorCentral',
        'imagenSuperiorDerecha',
        'imagenCentralIzquierda',
        'imagenCentral',
        'imagenCentralDerecha',
        'imagenInferiorIzquierda',
        'imagenInferiorCentral'
    ];
    matriz.forEach(fila => {
        fila.forEach(celda => {
            celda.elemento.classList = ['cuadro'];
            if (!celda.vacio) {
                const numeroClase = Math.floor(Math.random() * clasesPiezas.length);
                celda.elemento.classList.add(clasesPiezas[numeroClase]);
                clasesPPiezas.splice(numeroClase, 1);
            }
        });
    });
};

inicializar();