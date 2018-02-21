import { Routes } from "@angular/router";
import { SomeRouteComponent } from './SomeRoute/SomeRoute.component'

export const routeConfig: Routes = [
    {
        path: 'home/:id',
        component: SomeRouteComponent
    }
];