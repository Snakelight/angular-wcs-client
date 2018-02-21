import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MenuItem } from '../menu.component'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [

    trigger('rotate', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('1 <=> 0', animate('150ms')),
    ]),

    trigger('expand', [
      state('false', style({ height: '0px', opacity: 0, visibility: 'hidden' })),
      state('true', style({ height: '*', opacity: 1, visibility: 'visible' })),
      transition('1 <=> 0', animate('150ms ease-in-out')),
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input()
  item: MenuItem
  opened: boolean = false
  constructor() { }

  ngOnInit() {
  }


}
