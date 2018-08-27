import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQuestionComponent } from './free-question.component';

describe('FreeQuestionComponent', () => {
  let component: FreeQuestionComponent;
  let fixture: ComponentFixture<FreeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
