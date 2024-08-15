import { Component, inject, OnInit } from '@angular/core';
import { TrainsService } from '../../services/trains.service';
import { Istation } from '../../interfaces/trainn';
import { HttpClient } from '@angular/common/http';
import { error } from 'node:console';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  stationlist: Istation[] = [];
  fromstationID: number = 0;
  tostationID: number = 0;
  dateofTravel: string = "";
  router=inject(Router);

  constructor(http: HttpClient) { }
  ngOnInit(): void {
    this.getallstations();
  }




  trains = inject(TrainsService)
  getallstations() {
    this.trains.getallstations().subscribe((res: any) => {
      if (res.result) {

        console.log(this.stationlist = res.data);
        // alert("action completeds")
      }


    },
      error => {
        alert("error occured")
      })
  }





  onsearch() {
    if (this.fromstationID == 0 || this.tostationID == 0 || this.dateofTravel == "") {
      alert("Select your journey details properly")
    }
    else {
      if (this.fromstationID == this.tostationID) {
        alert("Departure and Destination station cannot be same")
      }
      else {
        this.router.navigate(['/Search',this.fromstationID,this.tostationID,this.dateofTravel])

      }
    }



  }











}
