// area.test.js
import * as chai from 'chai';
import test from 'node:test';
import calculateArea from '../src/circle.js';

test('calcula correctamente el área para un radio positivo', () => {
  const radius = 5;
  const expectedArea = 78.53975;
  chai.assert.strictEqual(calculateArea(radius), expectedArea);
});

test('lanza un error si el radio es negativo', () => {
  const radius = -3;
  chai.assert.throws(() => calculateArea(radius), { message: "El radio no puede ser negativo" });
});

test('calcula correctamente el área para un radio de 0', () => {
  const radius = 0;
  const expectedArea = 0;
  chai.assert.strictEqual(calculateArea(radius), expectedArea);
});
