import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeBonCoinComponent } from './le-bon-coin.component';

describe('LeBonCoinComponent', () => {
  let component: LeBonCoinComponent;
  let fixture: ComponentFixture<LeBonCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeBonCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeBonCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
