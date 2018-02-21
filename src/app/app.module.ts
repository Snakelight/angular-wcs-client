import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_LOCALE, ruRU } from 'ng-zorro-antd';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { routeConfig } from './app.routes'
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './index/menu/menu.component';
import { MenuItemComponent } from './index/menu/menuItem/menuItem.component';
import { SomeRouteComponent } from './SomeRoute/SomeRoute.component';

@NgModule({
    declarations: [
        IndexComponent,
        SomeRouteComponent,
        MenuComponent,
        MenuItemComponent
    ],
    imports: [
        RouterModule.forRoot(routeConfig),
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot(),
        VirtualScrollModule
    ],
    providers: [{ provide: NZ_LOCALE, useValue: ruRU }],
    bootstrap: [IndexComponent]
})
export class AppModule {
    constructor() {
    }
}
