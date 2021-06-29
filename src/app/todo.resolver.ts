import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<any> {
  resolve(): Observable<any> {
    const allItems = localStorage.getItem('allItems');

    if (allItems === null) {
      return of([]);
    }

    return of(allItems).pipe(map ( res => JSON.parse(res)));
  }
}
