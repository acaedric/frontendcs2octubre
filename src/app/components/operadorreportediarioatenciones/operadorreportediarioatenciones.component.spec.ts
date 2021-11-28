import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorreportediarioatencionesComponent } from './operadorreportediarioatenciones.component';

describe('OperadorreportediarioatencionesComponent', () => {
  let component: OperadorreportediarioatencionesComponent;
  let fixture: ComponentFixture<OperadorreportediarioatencionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorreportediarioatencionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorreportediarioatencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
