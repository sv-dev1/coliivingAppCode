import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSummaryPagePage } from './group-summary-page.page';

describe('GroupSummaryPagePage', () => {
  let component: GroupSummaryPagePage;
  let fixture: ComponentFixture<GroupSummaryPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSummaryPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSummaryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
