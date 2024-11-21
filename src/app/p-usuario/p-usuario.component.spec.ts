import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PUsuarioComponent } from './p-usuario.component';

describe('PUsuarioComponent', () => {
  let component: PUsuarioComponent;
  let fixture: ComponentFixture<PUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
