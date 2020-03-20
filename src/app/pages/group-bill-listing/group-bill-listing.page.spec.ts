import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBillListingPage } from './group-bill-listing.page';

describe('GroupBillListingPage', () => {
  let component: GroupBillListingPage;
  let fixture: ComponentFixture<GroupBillListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBillListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBillListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
