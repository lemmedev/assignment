import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  constructor(private router: Router, private auth: AuthService, private loader: LoaderService) {

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loader.changeStatus(true)

      }
      if (routerEvent instanceof NavigationEnd) {
        this.loader.changeStatus(false)

      }
    })
  }

  get isLoggedIn() { return this.auth.loggedInUser.value != null; }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
