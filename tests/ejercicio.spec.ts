import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe('Pruebas del ejercicio:', () => {
    it('Pruebas add: ', () => {
        expect(add(1, 2)).to.be.eql(3);
    });
});
