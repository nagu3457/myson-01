import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementModelComponent } from './engagement-model.component';

describe('EngagementModelComponent', () => {
  let component: EngagementModelComponent;
  let fixture: ComponentFixture<EngagementModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
