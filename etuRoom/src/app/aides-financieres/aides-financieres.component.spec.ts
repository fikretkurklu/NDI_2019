import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidesFinancieresComponent } from './aides-financieres.component';

describe('AidesFinancieresComponent', () => {
  let component: AidesFinancieresComponent;
  let fixture: ComponentFixture<AidesFinancieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidesFinancieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidesFinancieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
