import { FilterMap } from "./FilterMap";
/**
 * Clase que implementa el reduce con suma.
 * @param list : Lista sobre la que se aplicará el método reduce.
 * @method reduce : Metodo reduce emulado de JS.
 */
export class FilterMapAndReduce extends FilterMap {
    constructor(list: number[]) {
        super(list);
    }
    public reduce(lista: number[] = this.getlist()) {
        let suma: number = 0;
        for (let i = 0; i < lista.length; i++) {
            suma += lista[i];
        }
        return suma;
    }
}
