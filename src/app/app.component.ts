import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TaskAngular';
  constructor(private auth:AuthService,private router: Router){}
  ngOnInit(): void {
   if(this.auth.isUserLogin()){
    this.router.navigate(['task']);
   }
  }
}
