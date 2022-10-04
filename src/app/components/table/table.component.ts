import {Component, OnInit} from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Fernandez', name: 'Alejandro', weight: '06-12-2002', symbol: '2ºDAM'},
  {position: 'Cano', name: 'David', weight: '20-08-2002', symbol: '2ºTEAS'},
  {position: 'Trujillo', name: 'Mario', weight: '03-02-2002', symbol: '2ºTEAS'},
  {position: 'Gomez', name: 'Angela', weight: '10-10-2002', symbol: '2ºAyF'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}