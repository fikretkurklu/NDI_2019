import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeliComponent } from './ameli.component';

describe('AmeliComponent', () => {
  let component: AmeliComponent;
  let fixture: ComponentFixture<AmeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
