
const { calcularTotal } = require('../src/compras');

// CP-01: Cálculo del subtotal con descuento del 0 %
test('CP-01: calcula correctamente el subtotal', () => {
    expect(calcularTotal(10, 5, 0)).toBe(50);
});

// CP-02: Descuento del 0 %
test('CP-02: acepta un descuento del 0 %', () => {
    expect(calcularTotal(20, 2, 0)).toBe(40);
});

// CP-03: Descuento válido del 25 %
test('CP-03: aplica correctamente un descuento del 25 %', () => {
    expect(calcularTotal(100, 2, 25)).toBe(150);
});

// CP-04: Descuento del 100 %
test('CP-04: un descuento del 100 % produce un total de cero', () => {
    expect(calcularTotal(50, 2, 100)).toBe(0);
});

// CP-05: Redondeo a dos decimales
test('CP-05: redondea el resultado a dos decimales', () => {
    expect(calcularTotal(5.063, 2, 0)).toBe(10.13);
});

// CP-06: Precio negativo
test('CP-06: rechaza un precio negativo', () => {
    expect(() => calcularTotal(-10, 2, 0)).toThrow(RangeError);
});

// CP-07: Cantidad igual a cero
test('CP-07: rechaza una cantidad igual a cero', () => {
    expect(() => calcularTotal(10, 0, 0)).toThrow(RangeError);
});

// CP-08: Cantidad negativa
test('CP-08: rechaza una cantidad negativa', () => {
    expect(() => calcularTotal(10, -2, 0)).toThrow(RangeError);
});

// CP-09: Descuento inferior al rango permitido
test('CP-09: rechaza un descuento negativo', () => {
    expect(() => calcularTotal(10, 2, -1)).toThrow(RangeError);
});

// CP-10: Descuento superior al rango permitido
test('CP-10: rechaza un descuento superior al 100 %', () => {
    expect(() => calcularTotal(10, 2, 101)).toThrow(RangeError);
});

// CP-11: Precio no numérico
test('CP-11: rechaza un precio de tipo texto', () => {
    expect(() => calcularTotal('diez', 2, 0)).toThrow(TypeError);
});

// CP-12: Precio NaN
test('CP-12: rechaza un precio NaN', () => {
    expect(() => calcularTotal(NaN, 2, 0)).toThrow(TypeError);
});

// CP-13: Precio Infinity
test('CP-13: rechaza un precio Infinity', () => {
    expect(() => calcularTotal(Infinity, 2, 0)).toThrow(TypeError);
});

// CP-14: Cantidad Infinity
test('CP-14: rechaza una cantidad Infinity', () => {
    expect(() => calcularTotal(10, Infinity, 0)).toThrow(TypeError);
});

// CP-15: Descuento NaN
test('CP-15: rechaza un descuento NaN', () => {
    expect(() => calcularTotal(10, 2, NaN)).toThrow(TypeError);
});
