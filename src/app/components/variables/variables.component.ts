import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  titulo = 'Curso de JavaScript';

}

/*asi asignamos cualquier valor a nuestra variable,
   No olvidar colocarle valor descriptivo */
var miVariable = "CursoDeJavaScript"
  console.log(miVariable)

var miNombre = "Eliss"
  console.log(miNombre)

miVariable = "30"
  console.log(miVariable)

/*Diferencias entre una variable con un valor asignado y otra no */

var a;
var b = 2;

console.log(a);//undefined => nos indica que la variable no tiene un valor asignado
a = 10;
console.log(b);//Tiene un valor


/*Como le asignamos un valor a la variante a | lo asignamos con el signo = que se denomina
el operador de asignacion  en JavaScript
------------------------------------------------------
Asignar el Valor de una Variable a Otra Variable: Los dos tienen el mismo valor

*/
var a: any = 5;
var b = a;

console.log(a);
console.log(b);


/*Otra forma alternativa de como asignarle otra variable a otra : elresultado fue igual que
anterior.
*/
 var a:any = 5;
 var b: number;

 console.log(a);
 console.log(b);


/*Inicializar variables*/

var x = 9; /**/
var miIdioma = "Español";

/* variables no Inicializada*/

var a;
var b:number;

console.log(a);

a = 56;
console.log(a);



var suma = 7 + 12;
console.log(suma);


/* Arreglos*/
var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes);



var listaDeEstudiantes = [["Nora",97],["Gino",78]];
console.log(listaDeEstudiantes);


var datos =[[3.4, 5.6, 3.2], [6.1,4.5,7.8], [5.6,3.4,7.8]];
console.log(datos);


var miArreglo1 = [10, 20, 30];

console.log(miArreglo1[0]); //10
console.log(miArreglo1[1]); //20
console.log(miArreglo1[2]); //20


function sumar(a:any, b:any){
	return a + b;

}

var resultado = sumar(5, 3);
console.log(resultado);



function crearCadenaConMeta(lenguajeDeProgramacion:any){
	return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);



