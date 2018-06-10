import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // status 0:進行中 1:已完成
  tasks = [
    {
      name: '第一個任務',
      status: 0,
      showDetail: false,
      comment: '你嘛幫幫忙，連我阿嬤都比你強'
    },
    {
      name: '第二個任務',
      status: 0,
      showDetail: false,
      comment: 'how do you turn this on'
    },
    {
      name: '吃飯',
      status: 1,
      showDetail: false,
      comment: '大吉大利今晚吃雞'
    },
  ];
  constructor() { }
  getData() {
    console.log('asd');
    return this.tasks;
  }
}
