import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business7Component } from './business7.component';

describe('Business7Component', () => {
  let component: Business7Component;
  let fixture: ComponentFixture<Business7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
