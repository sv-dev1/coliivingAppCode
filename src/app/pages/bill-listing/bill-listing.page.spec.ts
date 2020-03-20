import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillListingPage } from './bill-listing.page';

describe('BillListingPage', () => {
  let component: BillListingPage;
  let fixture: ComponentFixture<BillListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
