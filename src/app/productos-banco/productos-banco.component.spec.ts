import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBancoComponent } from './productos-banco.component';

describe('ProductosBancoComponent', () => {
  let component: ProductosBancoComponent;
  let fixture: ComponentFixture<ProductosBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosBancoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
