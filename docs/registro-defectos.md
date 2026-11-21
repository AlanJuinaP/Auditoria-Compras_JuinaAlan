# Registro de defectos – Fase C

## Introducción

Durante la ejecución inicial de las pruebas automatizadas con Jest se identificaron defectos en la función `calcularTotal()`. Los hallazgos se registran a continuación, relacionándolos con los requisitos y casos de prueba correspondientes.

## DEF-01: Falta de redondeo a dos decimales

- **Requisito relacionado:** RF-03.
- **Casos de prueba:** CP-05.
- **Severidad:** Media.
- **Pasos para reproducir:**
  1. Ejecutar la función con los valores `precio = 5.063`, `cantidad = 2` y `descuento = 0`.
  2. Observar el resultado obtenido.
- **Resultado esperado:** 10.13.
- **Resultado actual:** 10.126.
- **Descripción:** La función realiza la operación matemática, pero no redondea el total a dos decimales, incumpliendo el requisito establecido.
- **Evidencia:** `evidencias/pruebas-iniciales.txt`.


## DEF-02: Falta de validación de rangos

- **Requisito relacionado:** RF-04.
- **Casos de prueba:** CP-06, CP-07, CP-08, CP-09 y CP-10.
- **Severidad:** Alta.
- **Pasos para reproducir:**
  1. Ejecutar la función con un precio negativo, una cantidad igual o menor que cero o un descuento fuera del rango permitido.
  2. Observar si la función genera una excepción.
- **Resultado esperado:** La función debe lanzar un `RangeError` cuando se incumplan los límites establecidos.
- **Resultado actual:** La función realiza los cálculos sin validar los rangos de entrada.
- **Descripción:** No existen controles para impedir precios negativos, cantidades iguales o menores que cero ni descuentos inferiores a 0 % o superiores a 100 %.
- **Evidencia:** `evidencias/pruebas-iniciales.txt`.

## DEF-03: Falta de validación de tipos y valores no finitos

- **Requisito relacionado:** RF-05.
- **Casos de prueba:** CP-11, CP-12, CP-13, CP-14 y CP-15.
- **Severidad:** Alta.
- **Pasos para reproducir:**
  1. Ejecutar la función con entradas como texto, `NaN` o `Infinity`.
  2. Observar si la función rechaza los datos.
- **Resultado esperado:** La función debe lanzar un `TypeError` cuando recibe datos que no sean números finitos.
- **Resultado actual:** La función realiza las operaciones sin validar las entradas y puede devolver resultados como `NaN` o `Infinity`.
- **Descripción:** No se comprueba que los parámetros sean valores numéricos finitos antes de realizar las operaciones.
- **Evidencia:** `evidencias/pruebas-iniciales.txt`.

## Estado inicial de los defectos

Los tres defectos se consideran pendientes de corrección. Su resolución se verificará mediante una nueva ejecución de las pruebas automatizadas y pruebas de regresión.

## Verificación de las correcciones

Después de modificar la función `calcularTotal()` se ejecutaron nuevamente los 15 casos automatizados mediante Jest.

Los resultados fueron satisfactorios: los 15 casos aprobaron y no se registraron pruebas fallidas. Esto permitió comprobar que las validaciones de entrada, los límites permitidos y el redondeo del resultado funcionan de acuerdo con los requisitos establecidos.

Los tres defectos registrados se consideran corregidos y verificados mediante las pruebas correspondientes.

**Evidencias utilizadas:**
- `evidencias/pruebas-iniciales.txt`
- `evidencias/pruebas-finales.txt`