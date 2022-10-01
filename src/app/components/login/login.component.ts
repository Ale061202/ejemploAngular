import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  checked = false;
  disable = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeVisibility(){
    if(this.checked = !this.checked){
      this.disable = false;
    }else{
      this.disable = true;
    }
  }

}


