import { Component } from '@angular/core';
import { ActivatedRoute, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public isLogin = true;
  public sideBar = true;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.routerChange();
    router.events.subscribe((event: Event) => {
      this.routerChange();
    });
  }

  handleMyEvent(eventObject) {
    this.sideBar = eventObject;
  }

  routerChange() {
    if (this.router.url !== '') {
      this.isLogin = true;
      if (this.router.url.split('/')[1] === 'login') {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    }
  }
}
