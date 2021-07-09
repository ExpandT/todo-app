import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {from, Observable, of} from 'rxjs';
import {TodoData} from "./share/todo";
import {filter, first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SelectedItemResolver implements Resolve<TodoData> {
  resolve(activatedRoute: ActivatedRouteSnapshot): Observable<TodoData> {
    const idString = activatedRoute.paramMap.get('id');
    if (idString === null) {
      return of({ } as TodoData);
    }

    const id: number  = parseInt(idString);
    const data: TodoData[] = JSON.parse(localStorage.getItem('allItems')!);

    // return of(data.filter(res => res.id === id));

    return from(data).pipe(filter(res => res.id === id), first())
    }
  }

