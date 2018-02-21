import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    exports: [...modules, BrowserAnimationsModule]
})
export class UiModule { }