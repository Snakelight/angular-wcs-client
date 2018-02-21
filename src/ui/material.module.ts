import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component'
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component'
import * as material from '@angular/material'


export function mapMaterialModules() {
    return Object.keys(material).filter((k) => {
        let asset = material[k];
        return typeof asset == 'function'
            && asset.name.startsWith('Mat')
            && asset.name.includes('Module');
    }).map((k) => material[k]);
}
const modules = mapMaterialModules();

@NgModule({
    imports: [...modules, BrowserAnimationsModule],
    exports: [...modules, BrowserAnimationsModule, MenuComponent, MenuItemComponent],
    declarations: [MenuComponent, MenuItemComponent],
})
export class MaterialModule { }