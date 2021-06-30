import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)},
  {path: 'home', component: HomeComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
