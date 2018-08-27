import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraComponent } from './scra.component';

describe('ScraComponent', () => {
  let component: ScraComponent;
  let fixture: ComponentFixture<ScraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
