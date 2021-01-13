import { Injectable } from '@angular/core';
import{Http,Headers,RequestOptions} from '@angular/http';
import { Task } from '../Models/Task';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  server="http://127.0.0.1:8000/api/task/";
  headers:Headers= new Headers();
  options:any;
  constructor(private http:HttpClient) { 
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-With','XMLHttpRequest');
    this.options = new RequestOptions({headers:this.headers});


  }
  AddTask(title:string){
    const newTask = new Task(title);
    //console.log(newTask);
    return this.http.post<Task>(this.server+'add',newTask);
  }
  getTasks():Observable<Task[]>
  {
    return this.http.get<Task[]>(this.server+'details');//,this.options).pipe(map(data=>data.json()));

  }
  deleteTask(id):Observable<Task>{
    const newTask = {
      id:id,
      title:'not set',
      status:false,
      date : (new Date()).toLocaleDateString()
    };
    return this.http.post<Task>(this.server+'delete',newTask);
  }
  getTask(id):Observable<Task>{
    const newTask = {
      id:id,
      title:'not set',
      status:false,
      date : (new Date()).toLocaleDateString()
    };
    return this.http.post<Task>(this.server+'detail',newTask);
  }
}
