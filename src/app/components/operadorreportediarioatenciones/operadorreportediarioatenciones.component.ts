import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'; 
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-operadorreportediarioatenciones',
  templateUrl: './operadorreportediarioatenciones.component.html',
  styleUrls: ['./operadorreportediarioatenciones.component.css']
})
export class OperadorreportediarioatencionesComponent implements OnInit {
  @ViewChild(MatSidenav) 
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver) { }
  
  events: string[] = [];
  addEvent(type: string, event: MatDatepickerInputEvent<Date>){
    this.events.push(`${type}: ${event.value}`);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
