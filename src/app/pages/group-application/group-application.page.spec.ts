import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupApplicationPage } from './group-application.page';

describe('GroupApplicationPage', () => {
  let component: GroupApplicationPage;
  let fixture: ComponentFixture<GroupApplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupApplicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
