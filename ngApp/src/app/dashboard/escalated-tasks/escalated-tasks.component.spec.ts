import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalatedTasksComponent } from './escalated-tasks.component';

describe('EscalatedTasksComponent', () => {
  let component: EscalatedTasksComponent;
  let fixture: ComponentFixture<EscalatedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalatedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalatedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
