import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-operadorreportequincenalatenciones',
  templateUrl: './operadorreportequincenalatenciones.component.html',
  styleUrls: ['./operadorreportequincenalatenciones.component.css']
})
export class OperadorreportequincenalatencionesComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
