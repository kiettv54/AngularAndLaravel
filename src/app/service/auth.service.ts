import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions,Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Authenticate } from '../Models/Authenticate';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  acc:any;
  server="http://127.0.0.1:8000/api/auth/";
  headers:Headers= new Headers();
  options:any;
  constructor(private http:HttpClient,private router: Router) { 
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-With','XMLHttpRequest');
    this.options = new RequestOptions({headers:this.headers});


  }
    login(email:string,password:string){
    const user = {email:email,password:password};
  
    this.http.post<Authenticate>(this.server+'login',user).subscribe(data=>{
          if(data.access_token !== ''){
            this.setSession(email,data.access_token,data.expires_in);
            alert("Login success");
            this.router.navigate(['task']);
          }
          else{
            alert("UserName or Password is incorrect");
            this.router.navigate(['/']);

          }
    });  
  }
  setSession(email:string,access_token:any,expires_in:any){
    const user={email:email};
    const token={token:access_token};
    const expiresIn={expires_in:expires_in};
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("token",JSON.stringify(token));
    localStorage.setItem("expiresIn",JSON.stringify(expiresIn));
  }
  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem("token");
    localStorage.removeItem('expiresIn');
  }
  isUserLogin(){
    const user = JSON.parse(localStorage.getItem('user'));
    return user!==null;
  }
}
