import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTransaccionesComponent } from './app-transacciones.component';

describe('AppTransaccionesComponent', () => {
  let component: AppTransaccionesComponent;
  let fixture: ComponentFixture<AppTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTransaccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
