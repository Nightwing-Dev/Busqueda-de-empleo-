import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedVacancyComponent } from './created-vacancy.component';

describe('CreatedVacancyComponent', () => {
  let component: CreatedVacancyComponent;
  let fixture: ComponentFixture<CreatedVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedVacancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
