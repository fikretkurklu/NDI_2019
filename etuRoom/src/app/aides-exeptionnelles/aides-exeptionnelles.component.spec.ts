import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidesExeptionnellesComponent } from './aides-exeptionnelles.component';

describe('AidesExeptionnellesComponent', () => {
  let component: AidesExeptionnellesComponent;
  let fixture: ComponentFixture<AidesExeptionnellesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidesExeptionnellesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidesExeptionnellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
