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
  activeDayIsOpen = false;

  viewDate: Date = moment().toDate();

  events: CalendarEvent[] = [
    {
      start: moment().toDate(),
      title: 'Bruce deploy on Internal',
    },
    {
      start: moment(new Date()).add(1, 'days').toDate(),
      title: 'UBI3 deploy on Internal',
    },
    {
      start: moment(new Date()).add(4, 'days').toDate(),
      title: 'DDS Cass deploy on Production',
    },
    {
      start: moment(new Date()).add(4, 'days').toDate(),
      title: 'DEX deploy on Staging',
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
