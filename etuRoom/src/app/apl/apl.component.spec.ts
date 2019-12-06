import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APLComponent } from './apl.component';

describe('APLComponent', () => {
  let component: APLComponent;
  let fixture: ComponentFixture<APLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
