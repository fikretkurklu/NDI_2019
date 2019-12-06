import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnousComponent } from './cnous.component';

describe('CnousComponent', () => {
  let component: CnousComponent;
  let fixture: ComponentFixture<CnousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
