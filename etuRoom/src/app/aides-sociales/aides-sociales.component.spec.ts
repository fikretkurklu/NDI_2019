import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidesSocialesComponent } from './aides-sociales.component';

describe('AidesSocialesComponent', () => {
  let component: AidesSocialesComponent;
  let fixture: ComponentFixture<AidesSocialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidesSocialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
