import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormularioRegistroComponentComponent } from './components/formulario-registro-component/formulario-registro-component.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialImportsModule } from './module/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { TableComponent } from './components/table/table.component';
import { ListaComponent } from './components/lista/lista.component';
import { StorageComponent } from './components/storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FormularioRegistroComponentComponent,
    TableComponent,
    ExpansionPanelComponent,
    StorageComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
