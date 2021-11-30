import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-operadorreportediarioatenciones',
  templateUrl: './operadorreportediarioatenciones.component.html',
  styleUrls: ['./operadorreportediarioatenciones.component.css']
})
export class OperadorreportediarioatencionesComponent implements OnInit {
  constructor() { }
  
  events: string[] = [];
  addEvent(type: string, event: MatDatepickerInputEvent<Date>){
    this.events.push(`${type}: ${event.value}`);
  }

  ngOnInit(): void {
  }
}
