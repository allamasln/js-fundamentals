// [LEER 3 minutos] TEORÍA: 
/* -- En JS hay infinitos VALORES disponibles. Algunos ejemplos:

"hola"
3
2.3 
":"
undefined
"En inglés si es 'Yes'"
false
null
NaN
true
241.55
0
[]
{}
"Ana"
[1,2,13]
{ name: "Lourdes", age: "99" }
':'
["Hola", 30, [true, false, null]]
f(x) = 2x 

*/

// Estos VALORES se pueden clasificar en unos pocos TIPOS. Cada TIPO tiene una o varias formas de expresar un VALOR LITERAL de ese TIPO:

/* -- TIPOS:

- Tipo String - para cadenas de caracteres (texto) 
- Expresamos el literal de string entre comillas dobles o simples:
> "hola" "Ana" "En inglés si es 'Yes'" ':' "Lourdes" "99" "Hola"

- Tipo Number -> Para todos los números en javascript
- Expresamos un literal de tipo Number sin comillas y usando . para los decimales.
> 3 2.3 241.55 0 1 2 13 30

- Tipo Booleano -> Solo hay dos valores de este tipo y se usan para expresar que algo es Verdadero o Falso.
- Expresamos un literal de booleano con el valor sin comillas
> true false

D) Los siguientes tipos y 'subtipos' los veremos en profundidad más adelante. (Objetos) 

- Tipo Objeto -> Array -> 
- Expresamos el literal de Array con los valores de cada posición separados por , y todos ellos entre square brackets (corchetes).
> [] [1,2,13] ["Hola", 30, [true, false, null]] [true, false, null]

- Tipo Objeto -> Object
- Expresamos el literal de objeto con pares clave-valor (propiedad/método: valor) separados por coma y dentro curly brackets (llaves)
> {} { name: "Lourdes", age: "99" }

- Tipo Objeto -> Function
- Tenemos distintas formas de expresar funciones que veremos más adelante.
> f(x) = 2x 

E) Los siguientes 3 tipos especiales llevan el nombre de su valor.Con ellos expresamos que 'No hay valor', veremos las diferencias entre ellos más adelante.

- Tipo undefined
- Expresamos el literal de undefined sin comillas
> undefined

- Tipo null
- Expresamos el literal de null sin comillas
> null

- Tipo NaN
Expresamos el literal de NaN sin comillas
> NaN
*/

/* ---- E2.1. 

La siguiente linea imprime en consola el caracter -
(Se ha expresado con un literal de string usando dobles comillas)

Comprueba la salida desde Chrome y pasa al E2.2.
*/

console.log("-");


/* ---- E2.2. 

Modifica ahora el siguiente console.log para imprimir el caracter "
*/

console.log('"');


/* ---- E2.3. 

Imprimir ahora el caracter '
*/

console.log("´")


/* -- NOTA: 

Recuerda cargar en consola el siguiente ejercicio desde el archivo index.html:

const ejercicio = 3;
*/