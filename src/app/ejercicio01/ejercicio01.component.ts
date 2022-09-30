import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.component.html',
  styleUrls: ['./ejercicio01.component.css']
})
export class Ejercicio01Component implements OnInit {
  disabled = true;
  checked = true;
  email = '';
  contraseña = '';

  constructor() { }

  ngOnInit(): void {
  }

  isChecked(){
    this.checked = !this.checked;
  }

  hacerLogin(){
    console.log(this.email)
    console.log(this.contraseña)
  }
}
