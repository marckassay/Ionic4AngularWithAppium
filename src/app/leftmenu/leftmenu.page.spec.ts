import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftmenuPage } from './leftmenu.page';

describe('LeftmenuPage', () => {
  let component: LeftmenuPage;
  let fixture: ComponentFixture<LeftmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
