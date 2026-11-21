
# Matriz de Casos de Prueba – Módulo de Cálculo de Compras

## 1. Objetivo

La presente matriz contiene los casos de prueba diseñados para evaluar el funcionamiento de la función `calcularTotal(precio, cantidad, descuento)`. Los casos se establecieron tomando como referencia los requisitos funcionales y no funcionales definidos en el plan de pruebas.

Se utilizarán datos válidos e inválidos para comprobar los cálculos, las restricciones de entrada, el manejo de errores y el comportamiento del módulo ante diferentes condiciones.

## 2. Convenciones utilizadas

**Prioridad:**
- Alta: casos relacionados con cálculos principales, validaciones y errores que pueden afectar directamente el resultado.
- Media: casos complementarios que permiten comprobar condiciones específicas del módulo.

**Estado:**
- Pendiente: caso diseñado, pero todavía no ejecutado.
- Aprobado: resultado real coincide con el esperado.
- Fallido: resultado real no coincide con el esperado.

Todos los casos comienzan con estado Pendiente, debido a que la ejecución se realizará en las siguientes fases.

## 3. Matriz de casos de prueba

| ID | Requisito | Técnica | Datos de entrada (precio, cantidad, descuento) | Resultado esperado | Prioridad | Estado |
|---|---|---|---|---|---|---|
| CP-01 | RF-01, RF-03 | Partición de equivalencia | (10, 5, 0) | Retornar 50.00 | Alta | Aprobado |
| CP-02 | RF-02, RF-03 | Valor límite inferior | (20, 2, 0) | Retornar 40.00 sin aplicar descuento | Alta | Aprobado |
| CP-03 | RF-01, RF-02, RF-03 | Partición de equivalencia | (100, 2, 25) | Retornar 150.00 | Alta | Aprobado |
| CP-04 | RF-02, RF-03 | Valor límite superior | (50, 2, 100) | Retornar 0.00 | Alta | Aprobado |
| CP-05 | RF-03 | Prueba de precisión decimal | (5.063, 2, 0) | Retornar 10.13 después del redondeo a dos decimales | Alta | Fallido |
| CP-06 | RF-04 | Partición de equivalencia inválida | (-10, 2, 0) | Lanzar RangeError por precio negativo | Alta | FAllido |
| CP-07 | RF-04 | Valor límite | (10, 0, 0) | Lanzar RangeError por cantidad igual a cero | Alta | Fallido |
| CP-08 | RF-04 | Partición de equivalencia inválida | (10, -2, 0) | Lanzar RangeError por cantidad negativa | Alta | Fallido |
| CP-09 | RF-04 | Valor límite inferior inválido | (10, 2, -1) | Lanzar RangeError por descuento menor que 0 | Alta | Fallido |
| CP-10 | RF-04 | Valor límite superior inválido | (10, 2, 101) | Lanzar RangeError por descuento mayor que 100 | Alta | Fallido |
| CP-11 | RF-05 | Partición de equivalencia inválida | ("diez", 2, 0) | Lanzar TypeError por precio no numérico | Alta | Fallido |
| CP-12 | RF-05 | Prueba de datos no finitos | (NaN, 2, 0) | Lanzar TypeError por precio no finito | Alta | Fallido |
| CP-13 | RF-05 | Prueba de datos no finitos | (Infinity, 2, 0) | Lanzar TypeError por precio no finito | Alta | Fallido |
| CP-14 | RF-05 | Prueba de datos no finitos | (10, Infinity, 0) | Lanzar TypeError por cantidad no finita | Alta | Fallido |
| CP-15 | RF-05 | Prueba de datos no finitos | (10, 2, NaN) | Lanzar TypeError por descuento no finito | Alta | Fallido |
| CP-16 | RNF-01 | Prueba de rendimiento exploratoria | Ejecutar repetidamente la función con (15, 3, 10) | Registrar el tiempo de ejecución y observar el comportamiento durante las repeticiones, sin establecer un umbral de aceptación no definido en la actividad | Media | Pendiente |

## 4. Técnicas aplicadas

### 4.1. Partición de equivalencia

Se agruparon las entradas según su comportamiento esperado. Para los valores numéricos se consideraron particiones válidas e inválidas, permitiendo seleccionar datos representativos sin necesidad de probar todas las combinaciones posibles.

Por ejemplo, un precio positivo pertenece a una partición válida, mientras que un precio negativo pertenece a una partición inválida.

### 4.2. Análisis de valores límite

Se seleccionaron valores cercanos a los límites establecidos en los requisitos:

- Descuento de 0 % como límite inferior válido.
- Descuento de 100 % como límite superior válido.
- Descuento de -1 % como valor inferior inválido.
- Descuento de 101 % como valor superior inválido.
- Cantidad igual a cero como límite inválido.

Estos casos permiten comprobar si las restricciones se aplican correctamente.

### 4.3. Pruebas con datos inválidos

Se incluyeron entradas no numéricas y valores no finitos, como textos, `NaN` e `Infinity`, para verificar que el módulo genere los errores de tipo correspondientes.

### 4.4. Pruebas de precisión decimal

Se incluyó un caso específico para comprobar que el resultado final se redondee a dos decimales, tal como establece RF-03.

### 4.5. Pruebas de rendimiento

Se incorporó una prueba exploratoria para observar el comportamiento de la función durante ejecuciones repetidas. Los resultados se registrarán posteriormente en la fase de evaluación de rendimiento.

## 5. Relación entre requisitos y casos de prueba

| Requisito | Casos relacionados | Cobertura prevista |
|---|---|---|
| RF-01 | CP-01, CP-03 | Cálculo del subtotal con datos positivos. |
| RF-02 | CP-02, CP-03, CP-04 | Descuentos válidos entre 0 % y 100 %. |
| RF-03 | CP-01, CP-02, CP-03, CP-04, CP-05 | Resultado con dos decimales y descuento total. |
| RF-04 | CP-06, CP-07, CP-08, CP-09, CP-10 | Validación de rangos permitidos. |
| RF-05 | CP-11, CP-12, CP-13, CP-14, CP-15 | Rechazo de entradas no numéricas o no finitas. |
| RNF-01 | CP-16 | Exploración limitada del rendimiento. |

## 6. Consideraciones finales

La matriz permite organizar las pruebas de acuerdo con los requisitos establecidos y proporciona una base para la automatización posterior mediante Jest.

Se priorizaron los casos relacionados con los cálculos y las validaciones, debido a que un error en estas operaciones podría generar resultados incorrectos en las compras.

Los estados de ejecución se actualizarán después de ejecutar cada prueba. De esta manera, se mantendrá la trazabilidad entre los casos diseñados, los defectos identificados y las correcciones realizadas.
