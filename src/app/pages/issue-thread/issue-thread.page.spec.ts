import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueThreadPage } from './issue-thread.page';

describe('IssueThreadPage', () => {
  let component: IssueThreadPage;
  let fixture: ComponentFixture<IssueThreadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueThreadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueThreadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
