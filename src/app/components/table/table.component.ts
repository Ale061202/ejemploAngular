import {Component, OnInit} from '@angular/core';


export interface Alumno {
  name: string;
  surname: string;
  birth: string;
  grade: string;
}

const STUDENT_DATA: Alumno[] = [
  {name: "Alejandro",surname: "Fernandez",birth: "06-12-2002",grade: "2ºDAM"},
  {name: "David",surname: "Cano",birth: "20-08-2002",grade: "2ºTEAS"},
  {name: "Mario",surname: "Trujillo",birth: "23-10-2002",grade: "2ºTEAS"},
  {name: "Angela",surname: "Gomez",birth: "12-06-2002",grade: "2ºAyF"},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name','surname','birth','grade'];
  dataSource = STUDENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}