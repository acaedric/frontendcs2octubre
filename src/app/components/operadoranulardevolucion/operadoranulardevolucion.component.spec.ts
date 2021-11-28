import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoranulardevolucionComponent } from './operadoranulardevolucion.component';

describe('OperadoranulardevolucionComponent', () => {
  let component: OperadoranulardevolucionComponent;
  let fixture: ComponentFixture<OperadoranulardevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadoranulardevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadoranulardevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
