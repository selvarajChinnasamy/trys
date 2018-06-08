import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() myEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public showSidebar = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.myEvent.emit(this.showSidebar);
  }

}
