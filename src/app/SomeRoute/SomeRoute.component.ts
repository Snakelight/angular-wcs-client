import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-SomeRoute',
  templateUrl: './SomeRoute.component.html',
  styleUrls: ['./SomeRoute.component.scss']
})
export class SomeRouteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

}
