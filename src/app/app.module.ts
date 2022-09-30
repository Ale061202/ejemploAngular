import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormularioRegistroComponentComponent } from './components/formulario-registro-component/formulario-registro-component.component';
import { FormsModule } from '@angular/forms';
import { MaterialImportsModule } from './module/material-imports.module';

=======
import { HeaderComponent } from './header/header.component';
import { MaterialImportsModule } from './module/material-imports.module';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemploCheckboxComponent } from './ejemplo-checkbox/ejemplo-checkbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
>>>>>>> 3b54e542249dccf31e25a723f52b1151a667a408


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    LoginComponent,
    SignupComponent,
    FormularioRegistroComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialImportsModule
=======
    Ejercicio01Component,
    EjemploCheckboxComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    FormsModule
>>>>>>> 3b54e542249dccf31e25a723f52b1151a667a408
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
