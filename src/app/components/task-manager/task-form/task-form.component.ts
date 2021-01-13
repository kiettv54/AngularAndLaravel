import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
title:string
formSubmit:boolean=false;
  constructor(private taskService:TaskService,private router: Router,private msg:MessageService) { }
  Add(element){
    this.formSubmit=true;
    element.preventDefault();
    this.taskService.AddTask(this.title).subscribe(data=>{
      if(data.id!==''){
        alert('Add Task is successfully!');
        //his.router.navigateByUrl('task');
        this.formSubmit=false;
        this.msg.setMessage("something happen");
      }
      else{ 
        alert('Add Task is failed');

      }
    })
  }
  ngOnInit() {
  }

}
