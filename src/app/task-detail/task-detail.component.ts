import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  tasks: any;
  showNewDetail: any;
  constructor(
    private service: TaskService
  ) { }

  ngOnInit() {
    this.tasks = this.service.getData();
    this.showNewDetail = false;
  }

}
