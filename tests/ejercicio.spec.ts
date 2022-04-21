import 'mocha';
import {expect} from 'chai';
import { FilterMap } from "../src/FilterMap";
import { FilterMapAndReduce } from "../src/FilterMapAndReduce";
import { FilterMapSubReduce } from "../src/FilterMapSubReduce";
import { mayorQue2 } from "../src/funciones";
import { par } from "../src/funciones";
import { impar } from "../src/funciones";
import { por3 } from "../src/funciones";
import { div2 } from "../src/funciones";

describe('Pruebas del ejercicio:', () => {
    const lista1 = new FilterMapAndReduce([1, 2, 3, 5]);
    const lista2 = new FilterMapSubReduce([10, 5]);
    it("Las listas son instancias de la clase Filter Map:", () => {
        expect(lista1).to.be.instanceOf(FilterMap);
        expect(lista2).to.be.instanceOf(FilterMap);
    });
    it("Las listas son instancias de sus clases:", () => {
        expect(lista1).to.be.instanceOf(FilterMapAndReduce);
        expect(lista2).to.be.instanceOf(FilterMapSubReduce);
    });
    it("Funciona el método run por defecto:", () => {
        expect(lista1.run()).to.be.eql(undefined);
        expect(lista2.run()).to.be.eql(undefined);
    });
    it("Funciona los metodos de filtrado:", () => {
        expect(lista1.filter(mayorQue2)).to.be.eql([3, 5]);
        expect(lista1.filter(par)).to.be.eql([2]);
        expect(lista1.filter(impar)).to.be.eql([1, 3, 5]);
        expect(lista2.filter(mayorQue2)).to.be.eql([10, 5]);
        expect(lista2.filter(par)).to.be.eql([10]);
        expect(lista2.filter(impar)).to.be.eql([5]);
    });
    it("Funciona los metodos de map:", () => {
        expect(lista1.map(por3)).to.be.eql([3, 6, 9, 15]);
        expect(lista1.map(div2)).to.be.eql([0.5, 1, 1.5, 2.5]);
        expect(lista2.map(por3)).to.be.eql([30, 15]);
        expect(lista2.map(div2)).to.be.eql([5, 2.5]);
    });
    it("Funciona los metodos de reduce:", () => {
        expect(lista1.reduce()).to.be.eql(11);
        expect(lista2.reduce()).to.be.eql(-15);
    });
});
