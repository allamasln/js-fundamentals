// [LEER 1 minuto] TEORÍA:

// En javascript podemos pedir un valor al usuario con la función prompt("Mensaje")

// La siguiente linea (8) dispara en el navegador una ventana emergente (popup) para solicitar valor al usuario

//let user = prompt("¿Escribe tu nombre usuasrio?");

// La ejecución se esperará en la linea 8 hasta que el usuario introduzca el nombre y pulse aceptar.

// Necesito almacenar el valor en una variable para procesarlo
// En la linea 8 el valor que introduce el usuario se almacena en la variable user antes de pasar a ejecutar la linea 15

//console.log("Bienvenido " + user);

/* ---- E1.1. 
 
 Abre el index.html desde el navegador y comprueba que se ejecuta la linea 7. El programa debe abrir un popup con el mensaje indicado pidiendo el valor, introduce en este un nombre y comprueba en la consola que se ejecuta la linea 14 tras pulsar aceptar.
*/

/* ---- E1.2. 

 Comenta la linea 7 y 14 y descomenta la 28 y 29 antes de ejecutar este ejercicio
 
 Haz los cambios necesiarios en la linea 28 para que se imprima el siguiente mensaje en consola usando el dato del usuario. "Tienes XX años"
*/

/* let age = 33 prompt("¿Escribe tu nombre usuario?");

 console.log("Tienes " + age + " años");

/* ---- E1.3. 

 Pide un nombre al usuario y almacenalo en una variable nombre
 Pide un apellido al usuario y almacenalo en la variable apellido
 Pide la edad al usuario y almacenalo en una variable edad.
 
 Por último suma 1 a la edad del usuario y muestra por consola el siguiente mensaje 
*/

 let nombre = prompt("¿Escribe tu nombre usuario?");
 let apellido = prompt("¿Escribe tu apellido usuario?");
 let edad = prompt("¿Escribe tu edad usuario?");
 (++edad);

 console.log("Felicidades" +' ' + nombre + ' ' +
  apellido +  ".Tienes " + edad + ' años.'  );
