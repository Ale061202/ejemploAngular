import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  password(){
    this.visible = !this.visible;
  }

}


