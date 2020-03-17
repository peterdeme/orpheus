import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseCalendarComponent } from './release-calendar.component';

describe('ReleaseCalendarComponent', () => {
  let component: ReleaseCalendarComponent;
  let fixture: ComponentFixture<ReleaseCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
