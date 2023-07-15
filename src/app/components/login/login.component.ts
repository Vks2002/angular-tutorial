import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form : any = {
    username: "",
    password: ""
  }

  formSubmitted = () =>{
    console.log(this.form);
    window.location.href = "/tools/task-creator"
  }

}
