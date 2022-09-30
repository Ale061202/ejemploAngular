import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialImportsModule } from './module/material-imports.module';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemploCheckboxComponent } from './ejemplo-checkbox/ejemplo-checkbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Ejercicio01Component,
    EjemploCheckboxComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
