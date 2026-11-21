
function calcularTotal(precio, cantidad, descuento) {
  // Validar que todas las entradas sean números finitos.
    const entradas = [precio, cantidad, descuento];

    if (!entradas.every(valor =>
    typeof valor === 'number' && Number.isFinite(valor)
    )) {
    throw new TypeError(
        'Todas las entradas deben ser números finitos.'
    );
    }

  // Validar los rangos permitidos.
    if (precio < 0) {
        throw new RangeError('El precio no puede ser negativo.');
    }

    if (cantidad <= 0) {
        throw new RangeError('La cantidad debe ser mayor que cero.');
    }

    if (descuento < 0 || descuento > 100) {
        throw new RangeError('El descuento debe estar entre 0 y 100.');
    }

  // Calcular el subtotal y aplicar el descuento.
  const subtotal = precio * cantidad;
  const valorDescuento = subtotal * descuento / 100;
    const total = subtotal - valorDescuento;

  // Redondear el resultado a dos decimales.
  return Math.round((total + Number.EPSILON) * 100) / 100;
}

module.exports = { calcularTotal };
