import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyTasksComponent} from './my-tasks/my-tasks.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  {path: '', redirectTo: '/my-task', pathMatch: 'full'},
  {path: 'my-task', component: MyTasksComponent},
  {path: 'in-progress', component: InProgressComponent},
  {path: 'completed', component: CompletedComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
