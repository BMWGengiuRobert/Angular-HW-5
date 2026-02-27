import { Routes } from '@angular/router';
import { NetworkTableComponent } from './shared/components/network-table/network-table.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { SettingsComponent } from './shared/components/settings/settings.component';

export const routes: Routes = [
    {
        path: '', component: NetworkTableComponent,
    },
    {
        path: 'network', component: NetworkTableComponent
    },
    {
        path: 'profile/:userId', component : ProfileComponent
    },
    {
        path:'settings', component:SettingsComponent
    },
    {
        path: '**', redirectTo: ''
    }
];
