import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business3Component } from './business3.component';

describe('Business3Component', () => {
  let component: Business3Component;
  let fixture: ComponentFixture<Business3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
