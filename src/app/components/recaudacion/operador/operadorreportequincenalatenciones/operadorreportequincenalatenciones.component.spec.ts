import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorreportequincenalatencionesComponent } from './operadorreportequincenalatenciones.component';

describe('OperadorreportequincenalatencionesComponent', () => {
  let component: OperadorreportequincenalatencionesComponent;
  let fixture: ComponentFixture<OperadorreportequincenalatencionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorreportequincenalatencionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorreportequincenalatencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
