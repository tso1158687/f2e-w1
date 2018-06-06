import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = 'mytask';
  constructor() {

  }

  ngOnInit() {
    console.log(this.isActive);
  }
  click(link) {
    this.isActive = link;
    console.log(this.isActive);
  }
}
