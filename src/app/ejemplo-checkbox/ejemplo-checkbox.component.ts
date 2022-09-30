import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-checkbox',
  templateUrl: './ejemplo-checkbox.component.html',
  styleUrls: ['./ejemplo-checkbox.component.css']
})
export class EjemploCheckboxComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
