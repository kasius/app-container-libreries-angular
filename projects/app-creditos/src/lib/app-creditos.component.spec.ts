import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreditosComponent } from './app-creditos.component';

describe('AppCreditosComponent', () => {
  let component: AppCreditosComponent;
  let fixture: ComponentFixture<AppCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCreditosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
