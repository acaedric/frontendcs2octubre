import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-operadorvalidarboleta',
  templateUrl: './operadorvalidarboleta.component.html',
  styleUrls: ['./operadorvalidarboleta.component.css']
})
export class OperadorvalidarboletaComponent implements OnInit {
  selected: Date | null | undefined;
  checked = false;
  disabled = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';

  constructor() { }

  ngOnInit(): void {
    
  }

}

