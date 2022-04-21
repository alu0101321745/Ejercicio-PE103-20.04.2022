/**
 * Clase FilterMap que implementa el patron template.
 * @param list : Listar a filtrar
 * @method run : Metodo que filtra y mapea con los metodos hooks por defecto.
 * @method filter : Emula el filtro de JS con la funcion que se le pase.
 * @method map : Emula el mapeo de JS con la funcion que se le pase.
 */
export abstract class FilterMap {
    constructor(private list: number[]) { }
    protected getlist(): number[] {return this.list;}

    public run(funcionFilter: (x: number) => boolean, funcionMap: (x: number) => number) {
        this.filter(funcionFilter);
        console.log(this.filter(funcionFilter));
        // hook
        this.afterFilter();
        // normal
        this.map(funcionMap);
        console.log(this.map(funcionMap));
        // hook
        this.afterMap();
    }

    public filter(funcionFilter: (x: number) => boolean): number[] {
        const listaFiltrada: number[] = [];
        for (let i = 0; i < this.list.length; i++) {
            if (funcionFilter(this.list[i])) {
                listaFiltrada.push(this.list[i]);
            }
        }
        return listaFiltrada;
    }
    protected FiltrarMenor2(x: number): boolean {
        if (x < 2) {
            return true;
        } else {
            return false;
        }
    }

    public map(funcionMap: (x: number) => number): number[] {
        const listaFiltrada: number[] = [];
        for (let i = 0; i < this.list.length; i++) {
            listaFiltrada.push(funcionMap(this.list[i]));
        }
        return listaFiltrada;
    }
    funcionMapPor2(x: number): number {
        return x * 2;
    }
    protected abstract reduce(lista: number[]): number;
    // Metodos hooks que imprimen por pantalla.
    protected afterFilter() {
        console.log("Se ha realizado el filtro.");
    }
    protected afterMap() {
        console.log("Se ja realizado el mapeo");
    }
}
