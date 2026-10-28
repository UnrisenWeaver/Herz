(function (global) {
  const CLAVE_CONTADOR = 'herz-visitas';

  function obtenerNumeroDeVisitas(storage = global.localStorage) {
    try {
      if (!storage) return 0;
      const guardado = Number(storage.getItem(CLAVE_CONTADOR));
      return Number.isFinite(guardado) && guardado >= 0 ? guardado : 0;
    } catch {
      return 0;
    }
  }

  function registrarVisita(storage = global.localStorage) {
    const total = obtenerNumeroDeVisitas(storage) + 1;

    try {
      if (storage) {
        storage.setItem(CLAVE_CONTADOR, String(total));
      }
    } catch {
      // Si el navegador bloquea el almacenamiento, igual seguimos mostrando la visita actual.
    }

    return total;
  }

  const api = { obtenerNumeroDeVisitas, registrarVisita };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  global.HERZ_CONTADOR = api;
})(typeof window !== 'undefined' ? window : globalThis);
