import { FeraComponent } from './fera/fera.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'home', component: FeraComponent },
        ]
    }

];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);