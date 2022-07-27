import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRecluiterComponent } from './register-recluiter.component';

describe('RegisterRecluiterComponent', () => {
  let component: RegisterRecluiterComponent;
  let fixture: ComponentFixture<RegisterRecluiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRecluiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRecluiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
