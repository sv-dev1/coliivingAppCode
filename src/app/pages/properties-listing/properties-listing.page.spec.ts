import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesListingPage } from './properties-listing.page';

describe('PropertiesListingPage', () => {
  let component: PropertiesListingPage;
  let fixture: ComponentFixture<PropertiesListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
