import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface TodoData{
  id: number,
  name: string,
  done: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<TodoData[]> {
  resolve(): Observable<TodoData[]> {
    const allItems = localStorage.getItem('allItems');

    if (allItems === null) {
      return of([]);
    }

    return of(allItems).pipe(map ( res => JSON.parse(res)));
  }
}
