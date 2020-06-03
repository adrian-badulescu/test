import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business8Component } from './business8.component';

describe('Business8Component', () => {
  let component: Business8Component;
  let fixture: ComponentFixture<Business8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
