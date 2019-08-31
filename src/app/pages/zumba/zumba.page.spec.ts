import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZumbaPage } from './zumba.page';

describe('ZumbaPage', () => {
  let component: ZumbaPage;
  let fixture: ComponentFixture<ZumbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZumbaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZumbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
