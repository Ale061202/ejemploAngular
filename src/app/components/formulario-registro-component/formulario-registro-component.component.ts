import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario-registro-component',
  templateUrl: './formulario-registro-component.component.html',
  styleUrls: ['./formulario-registro-component.component.css']
})
export class FormularioRegistroComponentComponent implements OnInit {
  inputName = '';
  inputApellidos = '';
  inputTelefono= '';
  inputEmail = '';
  inputNif = '';


  constructor() { }

  showText(){
    console.log(this.inputName,this.inputApellidos,this.inputEmail,this.inputTelefono,this.inputNif);
  }

  ngOnInit(): void {
  }

}
