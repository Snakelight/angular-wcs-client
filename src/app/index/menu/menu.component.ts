import { Component, OnInit, Input } from '@angular/core';
import { MenuItemComponent } from './menuItem/menuItem.component';

declare var require: any
var json = require('./nodes.json');
const data = json.nodes as any[]

class Permission {
  public nameRecord: string
  public iconClass: string
}

export class MenuNode {
  public permission: Permission
  public childs: MenuNode[]
}

const genNode = (dataRow: any) => {
  let node = new MenuNode();
  node.permission = new Permission();
  node.permission.nameRecord = dataRow.permission.nameRecord;
  node.permission.iconClass = dataRow.permission.webClass;
  if (dataRow.childs) {
    node.childs = dataRow.childs.map(genNode)
  }
  return node;
}

@Component({
  entryComponents: [MenuItemComponent],
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input() collapsed: boolean
  private items: MenuNode[]

  constructor() {
    this.items = data.map(genNode);
  }

  ngOnInit() {
  }

}