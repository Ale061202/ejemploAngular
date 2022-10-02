import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  surname: string;
  birth: Date;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Alejandro',surname: 'Fernandez', birth: new Date(2002, 11, 6), grade: '2ºDAM'},
  {name: 'David',surname: 'Cano', birth: new Date(2002, 7, 20), grade: '2ºTEAS'},
  {name: 'Mario',surname: 'Trujillo', birth: new Date(2002, 9, 24), grade: '2ºTEAS'},
  {name: 'Álvaro',surname: 'Serrano', birth: new Date(2002, 10, 9), grade: '2ºTEAS'},
  {name: 'Ángela',surname: 'Gomez', birth: new Date(2002, 8, 3), grade: '2ºAyF'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

}