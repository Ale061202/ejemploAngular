import { Component, OnInit } from '@angular/core';
import { profesores } from '../../models/model.interface';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  icon = 'face';
  sex = 'Male';

  constructor() { }

  ngOnInit(): void {
  }

  profesor: profesores[] = [
    {id: '1',name: 'Alejandro',surname: 'Fernandez',age: 20,},  
    {id: '2',name: 'Ángela',surname: 'Gomez',age: 20,},  
    {id: '3',name: 'Lucia',surname: 'Villalba',age: 20,},  
    {id: '4',name: 'David',surname: 'Cano',age: 20,},  
  ];
}
