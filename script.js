function serieFibonacci(num) {
  if (typeof num !== "number" && num < 1) return "Error de Parametros";
  let base = [0, 1, 1];
  result = [];
  for (let i = 0; i < num; i++)
    i < 3 ? result.push(base[i]) : result.push(result[i - 1] + result[i - 2]);
  return result.join(", ");
}
// Ejercicio 30 (Extra)
// En matemáticas, la sucesión o serie de Fibonacci es la siguiente sucesión infinita de números naturales:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,...
// La serie comienza con 0 y 1, y luego cada uno de los siguientes números se calcula sumando los dos anteriores.
// Por ejemplo, 21 es resultado de sumar 8 y 13. El número 34 es resultado de sumar 13 y 21.
// En este ejercicio se deberá crear una función en JavaScript llamada serieFibonacci que reciba como parámetro un número natural, mayor que 0, y retorne como resultado un string conteniendo una serie de Fibonacci con dicha cantidad de elementos.
// Ejemplos:
// Input ---> Output
// serieFibonacci(1) ---> "0"
// serieFibonacci(2) ---> "0, 1"
// serieFibonacci(3) ---> "0, 1, 1"
// serieFibonacci(4) ---> "0, 1, 1, 2"
// serieFibonacci(5) ---> "0, 1, 1, 2, 3"
// serieFibonacci(6) ---> "0, 1, 1, 2, 3, 5"
// serieFibonacci(7) ---> "0, 1, 1, 2, 3, 5, 8"
// serieFibonacci(8) ---> "0, 1, 1, 2, 3, 5, 8, 13"
