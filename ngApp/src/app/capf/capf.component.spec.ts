import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapfComponent } from './capf.component';

describe('CapfComponent', () => {
  let component: CapfComponent;
  let fixture: ComponentFixture<CapfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
