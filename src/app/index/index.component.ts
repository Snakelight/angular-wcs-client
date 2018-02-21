import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { NzNotificationService } from 'ng-zorro-antd';
import { VirtualScrollComponent } from 'angular2-virtual-scroll';

@Component({
    selector: 'app',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    entryComponents: [MenuComponent]
})
export class IndexComponent {
    menuIsCollapsed = true;
    data = [];
    visibleItems = [];
    min = 200000;
    max = 300000;
    lastAdded = null;
    barcode = '';

   

    constructor(private notify: NzNotificationService) {

    }

    ngOnInit() {
        this.notify.success("Запущено", "", { nzDuration: 500 })


        let data = []
        for (let i = this.min; i < this.max; i++) {
            data.push({
                id: i,
                name: `Товар ${i}`,
                price: 32,
                quantity: 0,
                barcode: i,
            });
        }

        this.data = data;
    }

    @ViewChild(VirtualScrollComponent)
    private virtualScroll: VirtualScrollComponent;
    
    addSomeItemQuantity() {
        let min = 0;
        let max = this.max - this.min;
        let barcode = Math.floor(Math.random() * max) + min + this.min;
        this.addItemByBarcode(barcode);
    }

    addItemByBarcode(barcode) {
        let item = this.data.find(x => x.barcode == barcode);
        item.quantity++;
        this.virtualScroll.scrollAnimationTime = 0;
        this.virtualScroll.scrollInto(item);
        this.lastAdded = item;
    }

    updateTotals() {

    }
}
