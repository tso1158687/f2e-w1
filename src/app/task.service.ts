import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getData() {
    console.log('asd');
    return 1;
  }
}
