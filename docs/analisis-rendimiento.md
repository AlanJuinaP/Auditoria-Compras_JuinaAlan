# Análisis exploratorio de rendimiento

## Objetivo

Evaluar de manera exploratoria el tiempo de ejecución de la función `calcularTotal()` mediante múltiples ejecuciones consecutivas, con el propósito de observar su comportamiento bajo una carga repetitiva.

## Procedimiento

Se utilizó la biblioteca `node:perf_hooks` para medir el tiempo de ejecución mediante `performance.now()`.

Se realizó un calentamiento previo de 10 000 ejecuciones y posteriormente se ejecutaron cinco rondas de 100 000 iteraciones cada una. En todas las rondas se utilizaron los mismos datos: precio de 15, cantidad de 3 y descuento del 10 %.

## Resultados

| Ronda | Tiempo de ejecución |
|---|---:|
| 1 | 70.9073 ms |
| 2 | 66.6141 ms |
| 3 | 63.1007 ms |
| 4 | 59.1133 ms |
| 5 | 58.8781 ms |
| **Promedio** | **63.7227 ms** |

El tiempo mínimo registrado fue de 58.8781 ms y el máximo de 70.9073 ms.

## Análisis

Los resultados muestran que la función pudo completar las 100 000 operaciones en todas las rondas. El tiempo promedio registrado fue de 63.7227 ms, sin observarse errores durante la ejecución.

También se aprecia una disminución progresiva de los tiempos entre las rondas. Este comportamiento puede estar relacionado con el calentamiento del entorno de ejecución y otros factores internos de Node.js.

## Limitaciones

Esta medición es exploratoria y se realizó en un entorno local. Los tiempos pueden variar según el hardware, los procesos activos, la versión de Node.js y las condiciones del sistema operativo.

La prueba no representa una evaluación de carga de usuarios simultáneos ni permite determinar el rendimiento de una aplicación completa. Tampoco se estableció un umbral obligatorio de aceptación, ya que el requisito RNF-01 plantea una exploración limitada del rendimiento.

## Conclusión

La función `calcularTotal()` completó satisfactoriamente las cinco rondas de medición. Los resultados permiten describir su comportamiento bajo ejecuciones repetitivas y cumplen con el objetivo de evaluación exploratoria establecido para esta actividad.