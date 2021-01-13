import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
task:Task;
  constructor(private route:ActivatedRoute,private taskService:TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      console.log(data.id);
      this.taskService.getTask(data.id).subscribe(tsk=>{
        this.task=tsk;
      });
    });
  }

}
