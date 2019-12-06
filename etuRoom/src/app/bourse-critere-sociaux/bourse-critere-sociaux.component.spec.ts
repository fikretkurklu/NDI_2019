import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BourseCritereSociauxComponent } from './bourse-critere-sociaux.component';

describe('BourseCritereSociauxComponent', () => {
  let component: BourseCritereSociauxComponent;
  let fixture: ComponentFixture<BourseCritereSociauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BourseCritereSociauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BourseCritereSociauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
