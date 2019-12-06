import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrousNiv2Component } from './crous-niv2.component';

describe('CrousNiv2Component', () => {
  let component: CrousNiv2Component;
  let fixture: ComponentFixture<CrousNiv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrousNiv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrousNiv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
