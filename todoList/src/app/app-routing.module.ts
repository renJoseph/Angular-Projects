import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { TodoComponent } from './components/todo/todo.component';
import { ViewComponent } from './components/view/view.component';


const routes: Routes = [
  {
    path: "",
    component: TodoComponent
  },{
    path: "new",
    component: NewComponent
  },{
    path: "view/:id",
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
