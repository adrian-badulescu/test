import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business10Component } from './business10.component';

describe('Business10Component', () => {
  let component: Business10Component;
  let fixture: ComponentFixture<Business10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
