const test = require('node:test');
const assert = require('node:assert/strict');
const { obtenerNumeroDeVisitas, registrarVisita } = require('./contador-visitas.js');

function crearAlmacen() {
  const datos = new Map();
  return {
    getItem(key) {
      return datos.has(key) ? String(datos.get(key)) : null;
    },
    setItem(key, value) {
      datos.set(key, String(value));
    },
    removeItem(key) {
      datos.delete(key);
    }
  };
}

test('obtenerNumeroDeVisitas devuelve 0 si no existe registro', () => {
  const storage = crearAlmacen();
  assert.equal(obtenerNumeroDeVisitas(storage), 0);
});

test('registrarVisita incrementa la cuenta y la guarda', () => {
  const storage = crearAlmacen();
  assert.equal(registrarVisita(storage), 1);
  assert.equal(registrarVisita(storage), 2);
  assert.equal(obtenerNumeroDeVisitas(storage), 2);
});
