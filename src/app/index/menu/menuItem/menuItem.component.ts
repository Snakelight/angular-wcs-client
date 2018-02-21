import { Component, OnInit, Input } from '@angular/core';
import { MenuNode } from '../menu.component'

@Component({
  selector: 'app-menuItem',
  templateUrl: './menuItem.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() private item: MenuNode

  constructor() { }

  ngOnInit() {
  }

  hasChilds() {
    return this.item.childs && this.item.childs.length > 0
  }
}
