import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task:Task;
  constructor(private taskService:TaskService,private router: Router) { }
  Delete(){
    this.taskService.deleteTask(this.task.id).subscribe(data=>{
      if(data.id !=='')
      {
        alert("delete successfully");
        this.router.navigateByUrl('task');
      }
      else{
        alert("delete failed");
      }
    })
  }
  ngOnInit() {
  }

}
