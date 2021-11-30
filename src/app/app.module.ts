import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminconsultasComponent } from './components/recaudacion/admin/adminconsultas/adminconsultas.component';
import { OperadorventaComponent } from './components/recaudacion/operador/operadorventa/operadorventa.component';
import { OperadorreportediarioatencionesComponent } from './components/recaudacion/operador/operadorreportediarioatenciones/operadorreportediarioatenciones.component';
import { OperadorreportequincenalatencionesComponent } from './components/recaudacion/operador/operadorreportequincenalatenciones/operadorreportequincenalatenciones.component';
import { OperadorvalidarboletaComponent } from './components/recaudacion/operador/operadorvalidarboleta/operadorvalidarboleta.component';
import { OperadoranulardevolucionComponent } from './components/recaudacion/operador/operadoranulardevolucion/operadoranulardevolucion.component';

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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './components/recaudacion/admin/admin.component';
import { OperadorComponent } from './components/recaudacion/operador/operador.component';
import { RecaudacionComponent } from './components/recaudacion/recaudacion.component';
import { SidebaradminComponent } from './components/sidebaradmin/sidebaradmin.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminconsultasComponent,
    OperadorventaComponent,
    OperadorreportediarioatencionesComponent,
    OperadorreportequincenalatencionesComponent,
    OperadorvalidarboletaComponent,
    OperadoranulardevolucionComponent,
    SidebarComponent,
    AdminComponent,
    OperadorComponent,
    RecaudacionComponent,
    SidebaradminComponent,
    InicioComponent
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
