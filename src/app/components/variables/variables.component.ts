import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  titulo = 'Curso de JavaScript';

}


var miVariable = "CursoDeJavaScript"
  console.log(miVariable)

var miNombre = "Eliss"
  console.log(miNombre)

miVariable = "30"
  console.log(miVariable)

  /*asi asignamos cualquier valor a nuestra variable,
   No olvidar colocarle valor descriptivo */
