import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business6Component } from './business6.component';

describe('Business6Component', () => {
  let component: Business6Component;
  let fixture: ComponentFixture<Business6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
