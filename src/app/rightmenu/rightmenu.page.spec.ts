import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightmenuPage } from './rightmenu.page';

describe('RightmenuPage', () => {
  let component: RightmenuPage;
  let fixture: ComponentFixture<RightmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
