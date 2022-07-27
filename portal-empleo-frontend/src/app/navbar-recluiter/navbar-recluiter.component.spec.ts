import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRecluiterComponent } from './navbar-recluiter.component';

describe('NavbarRecluiterComponent', () => {
  let component: NavbarRecluiterComponent;
  let fixture: ComponentFixture<NavbarRecluiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRecluiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRecluiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
