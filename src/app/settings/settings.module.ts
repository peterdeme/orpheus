import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SettingsRoutingModule,
        NgbModule
    ],
    declarations: [
        SettingsComponent,
        EnvironmentsComponent
    ]
})
export class SettingsModule { }
