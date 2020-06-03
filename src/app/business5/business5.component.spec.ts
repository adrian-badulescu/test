import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business5Component } from './business5.component';

describe('Business5Component', () => {
  let component: Business5Component;
  let fixture: ComponentFixture<Business5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
