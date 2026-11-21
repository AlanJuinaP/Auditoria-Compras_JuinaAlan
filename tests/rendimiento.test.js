
const { performance } = require('node:perf_hooks');
const { calcularTotal } = require('../src/compras');

test('CP-16: mide exploratoriamente el rendimiento del cálculo', () => {
    const iteraciones = 100000;
    const repeticiones = 5;
    const tiempos = [];

  // Calentamiento previo para reducir el efecto de la primera ejecución.
    for (let i = 0; i < 10000; i++) {
        calcularTotal(15, 3, 10);
    }

  // Realizar cinco mediciones.
    for (let ronda = 1; ronda <= repeticiones; ronda++) {
        const inicio = performance.now();

        let acumulado = 0;

    for (let i = 0; i < iteraciones; i++) {
        acumulado += calcularTotal(15, 3, 10);
        }

    const fin = performance.now();
    const duracion = fin - inicio;

    tiempos.push(duracion);

    console.log(
        `Ronda ${ronda}: ${duracion.toFixed(4)} ms | ` +
        `Resultado acumulado: ${acumulado.toFixed(2)}`
        );
    }

    const promedio =
        tiempos.reduce((suma, tiempo) => suma + tiempo, 0) /
        repeticiones;

    const minimo = Math.min(...tiempos);
    const maximo = Math.max(...tiempos);

    console.log('\n--- RESUMEN DE RENDIMIENTO ---');
    console.log(`Iteraciones por ronda: ${iteraciones}`);
    console.log(`Número de rondas: ${repeticiones}`);
    console.log(`Tiempo promedio: ${promedio.toFixed(4)} ms`);
    console.log(`Tiempo mínimo: ${minimo.toFixed(4)} ms`);
    console.log(`Tiempo máximo: ${maximo.toFixed(4)} ms`);

  // Se comprueba que la medición produzca un resultado válido,
  // sin establecer un límite de tiempo de aceptación.
    expect(Number.isFinite(promedio)).toBe(true);
    expect(promedio).toBeGreaterThanOrEqual(0);
});
