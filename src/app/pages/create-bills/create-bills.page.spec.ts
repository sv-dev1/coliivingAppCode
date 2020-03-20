import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillsPage } from './create-bills.page';

describe('CreateBillsPage', () => {
  let component: CreateBillsPage;
  let fixture: ComponentFixture<CreateBillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
