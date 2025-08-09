import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClaseComponent } from './detalle-clase.component';

describe('DetalleClaseComponent', () => {
  let component: DetalleClaseComponent;
  let fixture: ComponentFixture<DetalleClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleClaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
