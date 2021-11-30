import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminconsultasComponent } from './adminconsultas.component';

describe('AdminconsultasComponent', () => {
  let component: AdminconsultasComponent;
  let fixture: ComponentFixture<AdminconsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminconsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
