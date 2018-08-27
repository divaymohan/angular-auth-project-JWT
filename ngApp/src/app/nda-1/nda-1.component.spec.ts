import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nda1Component } from './nda-1.component';

describe('Nda1Component', () => {
  let component: Nda1Component;
  let fixture: ComponentFixture<Nda1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nda1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
