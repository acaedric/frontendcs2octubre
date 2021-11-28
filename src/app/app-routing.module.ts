import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminconsultasComponent } from './components/adminconsultas/adminconsultas.component';
import { OperadoranulardevolucionComponent } from './components/operadoranulardevolucion/operadoranulardevolucion.component';
import { OperadorreportediarioatencionesComponent } from './components/operadorreportediarioatenciones/operadorreportediarioatenciones.component';
import { OperadorreportequincenalatencionesComponent } from './components/operadorreportequincenalatenciones/operadorreportequincenalatenciones.component';
import { OperadorvalidarboletaComponent } from './components/operadorvalidarboleta/operadorvalidarboleta.component';
import { OperadorventaComponent } from './components/operadorventa/operadorventa.component';

const routes: Routes = [
  {path: 'recaudacion/admin/consultas', component: AdminconsultasComponent},
  {path: 'recaudacion/operador/venta', component: OperadorventaComponent},
  {path: 'recaudacion/operador/reportediarioatenciones', component: OperadorreportediarioatencionesComponent},
  {path: 'recaudacion/operador/reportequincenalatenciones', component: OperadorreportequincenalatencionesComponent},
  {path: 'recaudacion/operador/validarboleta', component: OperadorvalidarboletaComponent},
  {path: 'recaudacion/operador/anulardevolucion', component: OperadoranulardevolucionComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
