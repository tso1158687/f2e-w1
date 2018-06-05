import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    InProgressComponent,
    CompletedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
