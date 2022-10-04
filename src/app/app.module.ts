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
<<<<<<< HEAD
import { TableComponent } from './components/table/table.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';

=======
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { TableComponent } from './components/table/table.component';
import { ListaComponent } from './lista/lista.component';
<<<<<<< HEAD
import { StorageComponent } from './storage/storage.component';
=======
>>>>>>> 89329297318c5dbe7036bddb24642067c7d92a7f
>>>>>>> 0be48bb1d7c04e525d0335c5fd6538816e9492c1

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FormularioRegistroComponentComponent,
    TableComponent,
<<<<<<< HEAD
    ExpansionPanelComponent
=======
    ExpansionPanelComponent,
<<<<<<< HEAD
    ListaComponent,
    StorageComponent
=======
    ListaComponent
>>>>>>> 89329297318c5dbe7036bddb24642067c7d92a7f
>>>>>>> 0be48bb1d7c04e525d0335c5fd6538816e9492c1
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
