import { Component, OnInit, Input } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component'

export class MenuItem {
  public Title: string
  public Icon: string
  public Childs: MenuItem[]
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  entryComponents: [MenuItemComponent]
})
export class MenuComponent implements OnInit {
  @Input()
  items: MenuItem[] = []
  constructor() { }
  ngOnInit() { }
}


