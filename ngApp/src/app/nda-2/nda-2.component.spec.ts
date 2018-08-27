import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nda2Component } from './nda-2.component';

describe('Nda2Component', () => {
  let component: Nda2Component;
  let fixture: ComponentFixture<Nda2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nda2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
