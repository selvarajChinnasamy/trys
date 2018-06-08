import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule} from '@angular/material';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  
  _opened: boolean = true;
  public sideBar = true;
  constructor() { }
 
  _toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnInit() {
  }

}
