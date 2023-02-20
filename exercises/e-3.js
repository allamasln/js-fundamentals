// [LEER 2 minutos] TEORÍA:

// En programación podemos crear NOMBRES para expresar VALORES sin usar literales. Así podemos reutilizar y referir valores almacenados en diferentes puntos del programa.

// DECLARAR es como llamamos a la acción de crear un nombre.

// En Javascript declaramos escribiendo la PALABRA RESERVADA DEL LENGUAJE para cada uso (VARIABLE, CONSTANTE, FUNCTION,etc) seguido de un nombre que escojamos. No podemos crear nombres usando ninguna palabras reservada. Por ejemplo, las siguientes declaraciones y asignaciones lanzarían error:

// let let;
// let while = "while es una palabra reservada";
// const if = "if también es una palabra reservada"
// const let = "error, no puede usar let como nombre de constante"

// La siguiente linea declara un NOMBRE de valor VARIABLE, usando la PALABRA RESERVADA let en una setencia.

let user;

// Al declarar un nombre Javascript le asigna por defecto el valor undefined de tipo undefined, y estará asignado a ese valor hasta que se asigne otro.

/* ---- E3.1 

Comprueba en Chrome la salida de la siguiente linea. 
*/

console.log(user);

// Nota como hemos usado un nombre para expresar un valor. En cualquier lugar donde podemos usar un valor podemos expresarlo con cualquier forma o EXPRESIÓN.

// console.log(user) - Expresar valor asignado al nombre de variable user
// console.log(undefined) - Expresión literal de undefined
// console.log(":") - Expresión literal de string
// console.log(true) - Expresión literal booleana

// LAS VARIABLES son nombres que permiten cambiar de valor asignado.

// Asignamos valores a variables usando el OPERADOR de asignación =
// Como casi todos los operadores, = realiza una acción entre dos expresiones (user y 35). Concretamente asigna el valor expresado a la derecha al nombre del otro lado.

user = 35;

/* ---- E3.2 

Descomenta la siguiente linea y comprueba la salida en consola.
*/

console.log(user);

// Podemos declarar (let acceso) y asignar valores (= true) en la misma sentencia:

let acceso = true;

// Podemos DECLARAR tantos nombres como se necesiten, pero cada nombre debe ser diferente, JS lanzará error y bloqueará la ejecución si se encuentra una declaración de un nombre ya declarado.

/* ---- E3.3 

Descomenta la siguiente linea y haz los cambios para que desaparezca el error y se asigne el nuevo valor "Feliciano" a user.
*/

user = "Feliciano";

/* ---- E3.3.1 

Ahora escribe la sentencia para imprimir el nuevo valor de user por consola.

*/

console.log(user);

// Podemos declarar también nombres de valor CONSTANTE usando la PALABRA RESERVADA const. Las CONSTANTES son nombre que no pueden cambiar su primer valor asignado. Por este motivo Javascript obliga a asignar un valor en la misma sentencia de las declaraciones de constante o lanzará un error. Así evita que se asigne por defecto undefined para siempre.

/* ---- E.3.4.

Descomenta las 2 siguientes lineas de código y revisa en consola el error. Después asígnale en la misma sentencia de la declaración el valor de tipo String que quieras. Comprueba que el error desaparece y que se imprime el valor asignado.
*/

const equipo = "Betis"
console.log(equipo);

/*---- E3.5 

Descomenta las siguiente lineas de código y corrige los errores para que se imprima en consola los números del 1 al 5 (cada número en una linea).

- No puedes borrar ni agregar sentencias completas.
- No puedes tocar las lineas de console.log
- No puedes tocar, cambiar, agregar ningún operador
- Sólo puedes modificar PALABRAS RESERVADAS, NOMBRES o VALORES ASIGNADOS en las sentencias con declaraciones y/o asignaciones. */


const numero0 = 0;
let numero = 1;
console.log(numero);
numero = 4
const numero2 = 2;
console.log(numero2)
console.log(numero-1)
let numero4 = numero2 + 2;
console.log(numero)
numero4 = 4
console.log(++numero4)

/** Se han incluido algunos operadores nuevos como -, +, ++ que entenderemos en un futuro. Si no conoces como afectan al resultado trata de averiguarlo mirando las salidas. Recuerda que no puedes tocar ningún operador. 

-- NOTA: 

Recuerda cargar en consola el siguiente ejercicio cambiando el valor numérico del ejercicio desde el archivo index.html:

const ejercicio = 4;
*/

