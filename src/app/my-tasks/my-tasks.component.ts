import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  // showDetail: true;
  constructor(
    private service: TaskService
  ) { }
  ngOnInit() {
    this.service.getData();
  }
  getServiceData() {
    console.log('get service data');
  }
}
