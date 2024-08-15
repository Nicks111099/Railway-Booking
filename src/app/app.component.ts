import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { customer, LoggingIn, RegUserResponse } from './interfaces/trainn';
import { FormsModule } from '@angular/forms';
import { TrainsService } from './services/trains.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, SearchComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'railwaybooking';
  train = inject(TrainsService)
  Customer: customer = new customer();
  LOG: LoggingIn = new LoggingIn();
  LoggedUser: customer = new customer();



  ngOnInIt() {
    const localdata = localStorage.getItem('trainapp');
    if(localdata != null){
      this.LoggedUser=JSON.parse(localdata)
    }
  }










  openregister() {
    const model = document.getElementById("RegistrationModal");
    if (model != null) {
      model.style.display = 'block'
    }
  }


  closeregister() {
    const model = document.getElementById("RegistrationModal");
    if (model != null) {
      model.style.display = 'none'
    }
  }

  openlogin() {
    const model = document.getElementById("LoginModal");
    if (model != null) {
      model.style.display = 'block'
    }
  }


  closelogin() {
    const model = document.getElementById("LoginModal");
    if (model != null) {
      model.style.display = 'none'
    }
  }




  OnRegister() {
    this.train.CreateNewCustomer(this.Customer).subscribe((res: RegUserResponse) => {
      if (res.Result) {
        alert("Registration Successful !")
        this.closeregister();
      }
      else {
        alert(res.message)
      }
    }
    )
  }


  onlogin() {
    this.train.OnLogin(this.LOG).subscribe((res: any) => {
      if (res.result) {
        alert("Login Successful !")
        localStorage.setItem('trainapp', JSON.stringify(res.data));
        this.LoggedUser = res.data;
        this.closelogin();
      }
      else {
        alert(res.message)
      }



    })
  }


  onlogoff(){
    this.LoggedUser=new customer();
    localStorage.removeItem('trainapp')
  }








}
