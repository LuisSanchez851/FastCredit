import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPersonasComponent } from './productos-personas.component';

describe('ProductosPersonasComponent', () => {
  let component: ProductosPersonasComponent;
  let fixture: ComponentFixture<ProductosPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosPersonasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
