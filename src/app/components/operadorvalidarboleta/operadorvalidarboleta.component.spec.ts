import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorvalidarboletaComponent } from './operadorvalidarboleta.component';

describe('OperadorvalidarboletaComponent', () => {
  let component: OperadorvalidarboletaComponent;
  let fixture: ComponentFixture<OperadorvalidarboletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorvalidarboletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorvalidarboletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
