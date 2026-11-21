# Auditoría de Compras – Verificación y Validación de Software

## 1. Descripción del proyecto

Este proyecto corresponde a una actividad académica de la asignatura Verificación y Validación de Software. Su propósito es evaluar la calidad de un módulo de cálculo de compras mediante técnicas de prueba, identificación de defectos, corrección del código y ejecución de pruebas de regresión.

El módulo analizado permite calcular el total de una compra a partir del precio, la cantidad de productos y el porcentaje de descuento aplicado.

## 2. Objetivos

- Verificar que los cálculos del módulo sean correctos.
- Comprobar que se validen los datos de entrada.
- Identificar y documentar defectos del código original.
- Corregir los problemas encontrados sin modificar los requisitos.
- Ejecutar pruebas automatizadas y de regresión con Jest.
- Realizar una evaluación exploratoria del rendimiento.

## 3. Tecnologías utilizadas

- JavaScript.
- Node.js.
- Jest 30.5.2.
- npm.
- Git y GitHub.

## 4. Estructura del proyecto

```text
Auditoria-Compras/
├── src/
│   └── compras.js
├── tests/
│   ├── compras.test.js
│   └── rendimiento.test.js
├── docs/
│   ├── plan-pruebas.md
│   ├── matriz-casos.md
│   ├── registro-defectos.md
│   └── analisis-rendimiento.md
├── evidencias/
│   ├── pruebas-iniciales.txt
│   ├── pruebas-finales.txt
│   └── rendimiento.txt
├── package.json
├── package-lock.json
└── README.md
```

## 5. Requisitos evaluados

- **RF-01:** Calcular el subtotal multiplicando el precio por la cantidad.
- **RF-02:** Aplicar descuentos entre 0 % y 100 %.
- **RF-03:** Obtener el total redondeado a dos decimales.
- **RF-04:** Rechazar precios negativos, cantidades menores o iguales a cero y descuentos fuera del rango permitido mediante `RangeError`.
- **RF-05:** Rechazar entradas no numéricas o no finitas mediante `TypeError`.
- **RNF-01:** Realizar una evaluación exploratoria y limitada del rendimiento.

## 6. Instalación

Para ejecutar el proyecto localmente es necesario tener Node.js y npm instalados.

Clonar el repositorio:

```bash
git clone https://github.com/AlanJuinaP/Auditoria-Compras_JuinaAlan.git
```

Ingresar a la carpeta:

```bash
cd Auditoria-Compras_JuinaAlan
```

Instalar las dependencias:

```bash
npm install
```

## 7. Ejecución de pruebas

Para ejecutar las pruebas automatizadas:

```bash
npm test
```

El proyecto utiliza Jest para verificar el comportamiento de la función `calcularTotal()`.

La suite funcional contiene 15 casos de prueba y la suite exploratoria de rendimiento incorpora un caso adicional.

## 8. Resultados obtenidos

Durante la ejecución inicial se identificaron 11 pruebas fallidas y 4 aprobadas. Los defectos se relacionaron con la falta de redondeo, validación de rangos y validación de tipos de datos.

Después de aplicar las correcciones se obtuvieron los siguientes resultados:

- 15 pruebas funcionales aprobadas.
- 1 prueba exploratoria de rendimiento aprobada.
- 16 pruebas aprobadas en total.
- 0 pruebas fallidas en la ejecución final.

En la evaluación de rendimiento se realizaron cinco rondas de 100 000 iteraciones. El tiempo promedio registrado fue de 63.7227 ms.

## 9. Documentación y evidencias

La carpeta `docs/` contiene el plan de pruebas, la matriz de casos, el registro de defectos y el análisis de rendimiento.

La carpeta `evidencias/` contiene los resultados de las ejecuciones iniciales, finales y de rendimiento.

## 10. Autor

Proyecto académico desarrollado como parte de la asignatura Verificación y Validación de Software.

**Autor:** Alan Jair Juiña Pillajo

**Universidad:** Universidad Politécnica Salesiana

**Carrera:** Ingeniería en Software