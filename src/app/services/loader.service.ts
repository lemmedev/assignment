import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading = new BehaviorSubject<boolean>(false);

  getLoader(): Observable<boolean> {
    return this.loading.asObservable();
  }

  changeStatus(stat: boolean) {
    this.loading.next(stat)
  }

}
