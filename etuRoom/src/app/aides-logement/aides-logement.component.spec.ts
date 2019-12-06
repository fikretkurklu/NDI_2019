import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidesLogementComponent } from './aides-logement.component';

describe('AidesLogementComponent', () => {
  let component: AidesLogementComponent;
  let fixture: ComponentFixture<AidesLogementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidesLogementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidesLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
