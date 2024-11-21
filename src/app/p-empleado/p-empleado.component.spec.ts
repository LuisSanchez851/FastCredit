import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEmpleadoComponent } from './p-empleado.component';

describe('PEmpleadoComponent', () => {
  let component: PEmpleadoComponent;
  let fixture: ComponentFixture<PEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
