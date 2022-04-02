import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import * as moment from 'moment';


@Component({
  selector: 'app-release-calendar',
  templateUrl: 'release-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['release-calendar.component.css']
})
export class ReleaseCalendarComponent {
  view: CalendarView = CalendarView.Month;
  activeDayIsOpen = true;

  viewDate: Date = moment().toDate();

  events: CalendarEvent[] = [
    {
      start: moment().toDate(),
      title: 'TripProcessor deploy on Beta',
    },
    {
      start: moment(new Date()).add(1, 'days').toDate(),
      title: 'Registration Service deploy on Beta',
    },
    {
      start: moment(new Date()).add(4, 'days').toDate(),
      title: 'DriverData deploy on Production',
    },
    {
      start: moment(new Date()).add(4, 'days').toDate(),
      title: 'DataExporter deploy on Beta',
    },

  ];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (moment(date).isSame(this.viewDate, 'month')) {
      if (
        (moment(this.viewDate).isSame(date, 'date') && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
}
