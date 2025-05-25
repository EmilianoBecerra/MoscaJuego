import { mazo } from "./mazo.js";

export function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export function mezclarMazoYRepartirCartas() {

    const mazoMezclado = mezclarArray([...mazo]);
    const cartasRepartidas = [];

    for (let i = 0; i < 5; i++) {
        cartasRepartidas.push(mazoMezclado.pop());
    }

    return { mazoMezclado, cartasRepartidas };
}
