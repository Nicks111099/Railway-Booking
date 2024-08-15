import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Istation, Itrain, searching } from '../../interfaces/trainn';
import { TrainsService } from '../../services/trains.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  activatedroute = inject(ActivatedRoute)
  searchdata: searching = new searching();
  train = inject(TrainsService);
  router = inject(Router);
  Resultingtrains:Itrain[]=[];
  stationlist: Istation[] = [];
  fromstationID: number = 0;
  tostationID: number = 0;
  dateofTravel: string = "";
  fromstationname:string="";
  tostationname:string="";



  constructor(http: HttpClient) {
    this.activatedroute.params.subscribe((res: any) => {
      debugger;
      this.searchdata = res;
      debugger;
      this.getsearchtrains();
      this.getallstations();

    })
  }
    http = inject(HttpClient)

    ngOnInIt(){

    }

getallstations(){
  this.train.getallstations().subscribe((res: any) => {
    if (res.result) {

      console.log(this.stationlist = res.data);
      // alert("action completeds")
    }


  },
    error => {
      alert("error occured")
    })






}






    onsearch(){
      if (this.fromstationID == 0 || this.tostationID == 0 || this.dateofTravel == "") {
        alert("Select your journey details properly")
      }
      else {
        if (this.fromstationID == this.tostationID) {
          alert("Departure and Destination station cannot be same")
        }
        else {
          this.router.navigate(['/Search', this.fromstationID, this.tostationID, this.dateofTravel])

        }
      }
    }






  










  getsearchtrains() {
    this.train.getmytrains(this.searchdata.fromstationID, this.searchdata.tostationID, this.searchdata.dateofTravel).subscribe((res: any) => {
      this.Resultingtrains=res.data;
      debugger;
    })

  }













}
function onsearch() {
  throw new Error('Function not implemented.');
}

