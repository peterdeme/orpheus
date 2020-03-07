import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReleaseCalendarComponent } from './release-calendar/release-calendar.component';
import { FeedComponent } from './feed/feed.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { FormsModule } from '@angular/forms';
import { CalendarHeaderComponent } from './release-calendar/calendar-header/calendar-header.component';
import { ReleaseSchedulerComponent } from './release-scheduler/release-scheduler.component';
import { StacksComponent } from './stacks/stacks.component';
import { SettingsModule } from './settings/settings.module';
import { ToastContainerComponent } from './toast-container/toast-container.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReleaseCalendarComponent,
    FeedComponent,
    CalendarHeaderComponent,
    ReleaseSchedulerComponent,
    StacksComponent,
    ToastContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    SettingsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent, ToastContainerComponent]
})
export class AppModule { }
