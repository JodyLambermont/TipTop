import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertlogPage } from './insertlog.page';

describe('InsertlogPage', () => {
  let component: InsertlogPage;
  let fixture: ComponentFixture<InsertlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
