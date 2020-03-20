import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropInfoPage } from './prop-info.page';

describe('PropInfoPage', () => {
  let component: PropInfoPage;
  let fixture: ComponentFixture<PropInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
