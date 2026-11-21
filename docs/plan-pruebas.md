
# Plan de Pruebas – Módulo de Cálculo de Compras

## 1. Introducción

El presente plan de pruebas tiene como finalidad establecer el proceso de evaluación del módulo de cálculo de compras de una tienda digital. La actividad se enfoca en comprobar que los cálculos realizados por el sistema sean correctos, que las entradas inválidas sean identificadas y que los errores sean controlados adecuadamente.

Para realizar esta evaluación se utilizará el módulo proporcionado inicialmente, el cual contiene defectos intencionales. A partir de este código se diseñarán y ejecutarán diferentes pruebas que permitirán identificar fallas, documentarlas y posteriormente corregirlas sin modificar los requisitos establecidos.

## 2. Objetivos de las pruebas

### Objetivo general

Evaluar el funcionamiento del módulo de cálculo de compras mediante pruebas dinámicas que permitan verificar el cumplimiento de los requisitos funcionales y explorar su comportamiento en condiciones de uso específicas.

### Objetivos específicos

- Comprobar que el subtotal se calcule correctamente a partir del precio y la cantidad.
- Verificar que los descuentos aceptados se encuentren entre 0 % y 100 %.
- Comprobar que el total de la compra se presente con dos decimales.
- Identificar el comportamiento del módulo frente a valores negativos, entradas no válidas y datos fuera de rango.
- Automatizar los casos de prueba utilizando Jest.
- Registrar los defectos encontrados y comprobar que las correcciones realizadas no generen nuevos errores.
- Realizar una exploración limitada del rendimiento del módulo.

## 3. Alcance de las pruebas

La evaluación se concentrará en la función `calcularTotal(precio, cantidad, descuento)`, ubicada en el archivo `src/compras.js`.

Se comprobarán los siguientes aspectos:

- Cálculo del subtotal mediante la multiplicación del precio por la cantidad.
- Aplicación de descuentos válidos entre 0 % y 100 %.
- Presentación del resultado con dos decimales.
- Manejo de errores de rango mediante `RangeError`.
- Manejo de errores de tipo mediante `TypeError`.
- Comportamiento ante valores numéricos no finitos.
- Exploración del rendimiento mediante ejecuciones repetidas de la función.

Las pruebas se limitarán al módulo indicado en la actividad. No se evaluarán interfaces gráficas, bases de datos, conexiones externas ni otros componentes de una tienda digital.

## 4. Requisitos que serán evaluados

| Identificador | Descripción |
|---|---|
| RF-01 | El subtotal debe ser igual al precio multiplicado por la cantidad para números positivos. |
| RF-02 | El descuento debe encontrarse entre 0 y 100 %. |
| RF-03 | El total debe manejar dos decimales y un descuento del 100 % debe producir un resultado de cero. |
| RF-04 | Se debe generar RangeError cuando el precio sea negativo, la cantidad sea menor o igual a cero o el descuento esté fuera del rango permitido. |
| RF-05 | Se debe generar TypeError cuando las entradas no sean numéricas o no sean finitas. |
| RNF-01 | Se realizará una exploración limitada del rendimiento del módulo. |

## 5. Tipos y niveles de pruebas

### 5.1. Tipos de pruebas

**Pruebas funcionales:** permitirán comprobar que los cálculos y las validaciones del módulo cumplan con los requisitos establecidos.

**Pruebas de límites:** se utilizarán valores cercanos a los límites permitidos, como descuentos de 0 %, 100 % y valores fuera de ese intervalo.

**Pruebas de particiones de equivalencia:** se dividirán las entradas en grupos válidos e inválidos para seleccionar datos representativos y comprobar el comportamiento del sistema.

**Pruebas negativas:** se introducirán datos incorrectos, como valores negativos, textos, valores nulos y números no finitos, para comprobar el manejo de errores.

**Pruebas de regresión:** después de corregir los defectos se volverán a ejecutar las pruebas para comprobar que las funcionalidades anteriormente verificadas continúen funcionando.

**Pruebas de rendimiento exploratorias:** se realizarán ejecuciones repetidas de la función para observar su comportamiento y registrar los tiempos obtenidos en el entorno de desarrollo.

### 5.2. Niveles de pruebas

**Pruebas unitarias:** serán el nivel principal de evaluación, debido a que se analizará individualmente la función `calcularTotal()`.

No se realizarán pruebas de integración ni de sistema, ya que el alcance de la actividad se limita a un módulo independiente.

## 6. Técnicas de diseño de pruebas

Para diseñar los casos se utilizarán las siguientes técnicas:

- **Partición de equivalencia:** clasificación de datos válidos e inválidos para precio, cantidad y descuento.
- **Análisis de valores límite:** comprobación de valores mínimos, máximos y cercanos a los límites establecidos.
- **Pruebas basadas en errores:** utilización de entradas incorrectas para identificar posibles fallas en las validaciones.
- **Pruebas de regresión:** reutilización de los casos automatizados después de cada corrección.

Estas técnicas permitirán diseñar casos que cubran tanto el comportamiento esperado como las condiciones que podrían provocar errores.

## 7. Riesgos identificados

| Riesgo | Consecuencia | Acción preventiva |
|---|---|---|
| Falta de validaciones en el código inicial | Aceptación de datos incorrectos. | Diseñar pruebas con entradas inválidas. |
| Cálculos incorrectos del descuento | Resultados económicos equivocados. | Comprobar diferentes porcentajes de descuento. |
| Manejo incorrecto de decimales | Diferencias en los totales calculados. | Evaluar el redondeo con distintos valores. |
| Correcciones que afecten otras funcionalidades | Aparición de nuevos defectos. | Ejecutar pruebas de regresión. |
| Diferencias en el entorno de ejecución | Resultados difíciles de reproducir. | Documentar versiones y configuración utilizadas. |
| Mediciones de rendimiento variables | Interpretaciones poco confiables. | Repetir las mediciones y documentar sus limitaciones. |

## 8. Ambiente de pruebas

Para desarrollar la actividad se utilizará un entorno local con las siguientes herramientas:

- **Sistema operativo:** Windows 10 u 11.
- **Editor de código:** Visual Studio Code.
- **Entorno de ejecución:** Node.js.
- **Lenguaje de programación:** JavaScript.
- **Framework de pruebas:** Jest.
- **Gestor de paquetes:** npm.
- **Control de versiones:** Git.
- **Repositorio remoto:** GitHub.

Las versiones exactas de Node.js, npm y Jest se registrarán durante la configuración del entorno.

## 9. Criterios de entrada

Para comenzar la ejecución de las pruebas se deberán cumplir las siguientes condiciones:

- Tener creada la estructura del proyecto.
- Disponer del código inicial proporcionado por el docente.
- Tener identificados los requisitos funcionales y no funcionales.
- Contar con los casos de prueba documentados en la matriz.
- Tener instalado y configurado Node.js y Jest.
- Disponer de un entorno que permita ejecutar las pruebas automatizadas.

## 10. Criterios de salida

Se considerará finalizada la evaluación cuando se cumplan las siguientes condiciones:

- Se hayan diseñado al menos 12 casos de prueba.
- Se hayan automatizado al menos 10 casos mediante Jest.
- Se hayan ejecutado las pruebas sobre el código inicial y conservado sus resultados.
- Se hayan identificado y documentado al menos tres defectos confirmados.
- Se hayan aplicado las correcciones necesarias.
- Se hayan ejecutado nuevamente las pruebas y comprobado la regresión.
- Se haya realizado la exploración de rendimiento.
- Se hayan documentado los resultados, la cobertura de requisitos y los riesgos residuales.
- Se encuentre disponible el informe final y el repositorio con sus respectivas evidencias.

## 11. Consideraciones finales

La planificación permitirá desarrollar las pruebas de manera ordenada y mantener una relación clara entre los requisitos, los casos diseñados y los resultados obtenidos.

Se dará especial importancia a la identificación de defectos en el código inicial, ya que esto permitirá demostrar la utilidad de las pruebas dinámicas. Asimismo, las correcciones se realizarán de forma progresiva y se comprobarán mediante pruebas de regresión, procurando mantener los requisitos originales durante todo el proceso.
