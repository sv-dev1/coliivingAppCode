import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyApplicationPage } from './property-application.page';

describe('PropertyApplicationPage', () => {
  let component: PropertyApplicationPage;
  let fixture: ComponentFixture<PropertyApplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyApplicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
