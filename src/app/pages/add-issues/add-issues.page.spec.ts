import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIssuesPage } from './add-issues.page';

describe('AddIssuesPage', () => {
  let component: AddIssuesPage;
  let fixture: ComponentFixture<AddIssuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIssuesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIssuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
