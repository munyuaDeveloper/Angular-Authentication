import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCounterComponent } from './tasks-counter.component';

describe('TasksCounterComponent', () => {
  let component: TasksCounterComponent;
  let fixture: ComponentFixture<TasksCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
