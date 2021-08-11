import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.loggedInUser = new BehaviorSubject<any>(localStorage.getItem('loggedInUser'));
  }

  login(username: string, password: string) {
    let token = "TOKENSTRING*#R&YH^F&EH^F*&^EH*"
    let delayedObservable = of(token).pipe(takeWhile((val, i) => {

      if (username == 'username' && password == 'password')
        return true;
      throw Error('Please check login credentials')
    }), map(data => {
      localStorage.setItem('loggedInUser', token);
      this.loggedInUser.next(token);
    }), delay(2000));
    return delayedObservable;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.loggedInUser.next(null);
  }
}
