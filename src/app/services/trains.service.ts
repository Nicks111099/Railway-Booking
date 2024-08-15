import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { customer, RegUserResponse } from '../interfaces/trainn';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {

 constructor(private http:HttpClient){}



 getallstations(){
  return this.http.get("https://freeapi.miniprojectideas.com/api/TrainApp/GetAllStations");
 }

 getmytrains(from:number, to:number, date:string){
  return this.http.get(`https://freeapi.miniprojectideas.com/api/TrainApp/GetTrainsBetweenStations?departureStationId=${from}&arrivalStationId=${to}&departureDate=${date}`)

 }


CreateNewCustomer(obj : customer){

  return this.http.post<RegUserResponse>("https://freeapi.miniprojectideas.com/api/TrainApp/AddUpdatePassengers",obj)
}


OnLogin(obj:any){
  return this.http.post("https://freeapi.miniprojectideas.com/api/TrainApp/Login",obj)
}











   }

