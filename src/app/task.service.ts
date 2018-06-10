import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // done true:完成,false:進行中
  tasks = [
    {
      name: '第一個任務',
      done: true,
      showDetail: false,
      isFavorite: true,
      hasFile: false,
      deadline: true,
      comment: '你嘛幫幫忙，連我阿嬤都比你強'
    },
    {
      name: '第二個任務',
      done: true,
      showDetail: false,
      isFavorite: false,
      hasFile: true,
      deadline: false,
      comment: 'how do you turn this on'
    },
    {
      name: '吃飯',
      done: false,
      showDetail: false,
      isFavorite: false,
      hasFile: true,
      deadline: true,
      comment: '大吉大利今晚吃雞'
    },
    {
      name: '午餐',
      done: false,
      showDetail: false,
      isFavorite: false,
      hasFile: false,
      deadline: false,
      comment: ''
    }
  ];
  constructor() { }
  getData() {
    return this.tasks;
  }
}
