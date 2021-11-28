import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorventaComponent } from './operadorventa.component';

describe('OperadorventaComponent', () => {
  let component: OperadorventaComponent;
  let fixture: ComponentFixture<OperadorventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
