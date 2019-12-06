import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionsAlimentairesComponent } from './distributions-alimentaires.component';

describe('DistributionsAlimentairesComponent', () => {
  let component: DistributionsAlimentairesComponent;
  let fixture: ComponentFixture<DistributionsAlimentairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionsAlimentairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionsAlimentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
