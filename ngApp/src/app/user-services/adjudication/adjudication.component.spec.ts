import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjudicationComponent } from './adjudication.component';

describe('AdjudicationComponent', () => {
  let component: AdjudicationComponent;
  let fixture: ComponentFixture<AdjudicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjudicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjudicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
