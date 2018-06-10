import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    InProgressComponent,
    CompletedComponent,
    HeaderComponent,
    TaskDetailComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
