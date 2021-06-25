import { Injectable } from '@angular/core';
import {Router, Resolve,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<any> {
  resolve(): Observable<any> {
  return of(localStorage.allItems).pipe(map ( res => JSON.parse(res)));  
  }
}
