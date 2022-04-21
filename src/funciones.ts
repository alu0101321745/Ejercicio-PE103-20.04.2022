// Funciones para el filter
export function mayorQue2(x: number) {
    if ( x > 2) {
        return true;
    } else {
        return false;
    }
}

export function par(x: number) {
    if ( x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

export function impar(x: number) {
    if ( x % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

// Funciones para el map.
export function por3(x: number) {
    return x * 3;
}

export function div2(x: number) {
    return x / 2;
}
