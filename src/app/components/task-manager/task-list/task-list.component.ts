import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:Task[];
  constructor(private taskService:TaskService,private msg:MessageService) { }

  ngOnInit() {
    this.getAllTask();
    this.msg.getMessage().subscribe(data=>{
      this.getAllTask();
    });
  }
  getAllTask(){
    this.taskService.getTasks().subscribe(data=>{
      this.tasks=data;
    })
  }
}
