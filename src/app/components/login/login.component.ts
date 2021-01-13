import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router: Router) { }
  login(e){
    const target = e.target;
    const email  = target.querySelector('#nm').value;
    const password  = target.querySelector('#pw').value;
   this.auth.login(email,password);
   
  }
  ngOnInit() {
  }

}
