import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdminComponent } from './components/recaudacion/admin/admin.component';
import { AdminconsultasComponent } from './components/recaudacion/admin/adminconsultas/adminconsultas.component';
import { OperadorComponent } from './components/recaudacion/operador/operador.component';
import { OperadoranulardevolucionComponent } from './components/recaudacion/operador/operadoranulardevolucion/operadoranulardevolucion.component';
import { OperadorreportediarioatencionesComponent } from './components/recaudacion/operador/operadorreportediarioatenciones/operadorreportediarioatenciones.component';
import { OperadorreportequincenalatencionesComponent } from './components/recaudacion/operador/operadorreportequincenalatenciones/operadorreportequincenalatenciones.component';
import { OperadorvalidarboletaComponent } from './components/recaudacion/operador/operadorvalidarboleta/operadorvalidarboleta.component';
import { OperadorventaComponent } from './components/recaudacion/operador/operadorventa/operadorventa.component';
import { RecaudacionComponent } from './components/recaudacion/recaudacion.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'recaudacion',
        component: RecaudacionComponent,
        children: [
          {
            path: 'admin',
            component: AdminComponent,
            children: [
              {
                path:'consultas',
                component:AdminconsultasComponent
              }
            ]
          },
          {
            path: 'operador',
            component: OperadorComponent,
            children: [
              {
                path:'venta',
                component: OperadorventaComponent
              },
              {
                path:'reportediarioatenciones',
                component: OperadorreportediarioatencionesComponent
              },
              {
                path: 'reportequincenalatenciones', 
                component: OperadorreportequincenalatencionesComponent
              },
              {
                path: 'validarboleta',
                component: OperadorvalidarboletaComponent
              },
              {
                path: 'anulardevolucion', 
                component: OperadoranulardevolucionComponent
              },
    
    
            ]
          }
        ]
      },
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
