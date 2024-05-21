import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
 
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginobject:any={
  userName:'',
  password:''

}
constructor(private router:Router){

}
onLogin(){
  if(this.loginobject.userName == "admin" && this.loginobject.password == "123"){
    this.router.navigateByUrl('/products')
  }
  else{
    alert('wrong')
    console.log("this.loginobject.userName")
} 

}
}
