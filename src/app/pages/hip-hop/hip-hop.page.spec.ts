import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHopPage } from './hip-hop.page';

describe('HipHopPage', () => {
  let component: HipHopPage;
  let fixture: ComponentFixture<HipHopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipHopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipHopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
