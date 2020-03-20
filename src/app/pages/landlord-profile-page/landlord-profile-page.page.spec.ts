import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordProfilePagePage } from './landlord-profile-page.page';

describe('LandlordProfilePagePage', () => {
  let component: LandlordProfilePagePage;
  let fixture: ComponentFixture<LandlordProfilePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordProfilePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordProfilePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
