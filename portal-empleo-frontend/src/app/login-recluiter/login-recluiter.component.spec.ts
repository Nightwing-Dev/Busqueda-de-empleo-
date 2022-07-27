import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRecluiterComponent } from './login-recluiter.component';

describe('LoginRecluiterComponent', () => {
  let component: LoginRecluiterComponent;
  let fixture: ComponentFixture<LoginRecluiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRecluiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRecluiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
