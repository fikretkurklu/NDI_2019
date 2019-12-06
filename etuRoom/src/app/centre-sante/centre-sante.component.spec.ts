import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreSanteComponent } from './centre-sante.component';

describe('CentreSanteComponent', () => {
  let component: CentreSanteComponent;
  let fixture: ComponentFixture<CentreSanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreSanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
