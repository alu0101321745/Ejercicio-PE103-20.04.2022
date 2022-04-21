import { FilterMap } from "./FilterMap";
/**
 * Clase que implementa el reduce con resta.
 * @param list : Lista sobre la que se aplicará el método reduce.
 * @method reduce : Metodo reduce emulado de JS.
 */
export class FilterMapSubReduce extends FilterMap {
    constructor(list: number[]) {
        super(list);
    }
    public reduce(lista: number[] = this.getlist()) {
        let sub: number = 0;
        for (let i = 0; i < lista.length; i++) {
            sub -= lista[i];
        }
        return sub;
    }
}
