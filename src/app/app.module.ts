import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminconsultasComponent } from './components/adminconsultas/adminconsultas.component';
import { OperadorventaComponent } from './components/operadorventa/operadorventa.component';
import { OperadorreportediarioatencionesComponent } from './components/operadorreportediarioatenciones/operadorreportediarioatenciones.component';
import { OperadorreportequincenalatencionesComponent } from './components/operadorreportequincenalatenciones/operadorreportequincenalatenciones.component';
import { OperadorvalidarboletaComponent } from './components/operadorvalidarboleta/operadorvalidarboleta.component';
import { OperadoranulardevolucionComponent } from './components/operadoranulardevolucion/operadoranulardevolucion.component';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AdminconsultasComponent,
    OperadorventaComponent,
    OperadorreportediarioatencionesComponent,
    OperadorreportequincenalatencionesComponent,
    OperadorvalidarboletaComponent,
    OperadoranulardevolucionComponent
  ],
  imports: [
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CommonModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
