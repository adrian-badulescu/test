import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business9Component } from './business9.component';

describe('Business9Component', () => {
  let component: Business9Component;
  let fixture: ComponentFixture<Business9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
