import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BourseErasmusComponent } from './bourse-erasmus.component';

describe('BourseErasmusComponent', () => {
  let component: BourseErasmusComponent;
  let fixture: ComponentFixture<BourseErasmusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BourseErasmusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BourseErasmusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
