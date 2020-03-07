import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { NgModule } from '@angular/core';

const settingsRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {
                path: 'environments',
                component: EnvironmentsComponent
            },
            {
                path: 'environments/:env',
                component: EnvironmentsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(settingsRoutes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
