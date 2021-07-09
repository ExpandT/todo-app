import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'search', loadChildren: ()=> import('./search/search.module').then(m => m.SearchModule)},
  {path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: '404', loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
