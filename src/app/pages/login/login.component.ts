import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: any = {
    emailId: "",
    password: ""
  }

  onSubmit = () => {
    if (this.form.emailId.trim() == '' || this.form.emailId.trim() == '') {
      Swal.fire({
        title: "Validation Failed!",
        icon: 'warning',
        text: "All fields are mandatory."
      });
    } else {
      Swal.fire({
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        icon: 'success',
        text: "Logged In Successfully"
      }).then((result)=>{
        if(result.isConfirmed){
          Swal.close();
        }
      });
    }
  }

}
