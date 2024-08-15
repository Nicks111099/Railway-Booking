export interface Istation{
    
    stationID:number;
    stationName:string;
    stationCode:string;

}

export class searching{
    
    fromstationID:number;
    tostationID:number;
    dateofTravel:string;
    departureStationName:string;
    arrivalStationName:string;

    constructor(){
        this.fromstationID=0;
        this.tostationID=0;
        this.dateofTravel="";
        this.departureStationName="";
        this.arrivalStationName="";
    }
}


export interface Itrain {
    trainId: number
    trainNo: number
    trainName: string
    departureStationName: string
    arrivalStationName: string
    arrivalTime: string
    departureTime: string
    totalSeats: number
    departureDate: string
    bookedSeats: number
  }


  export class customer {
    passengerID: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;

    constructor() {
     this.passengerID=0;
     this.firstName="";
     this.lastName="";
     this.email="";
     this.phone="";
     this.password="";


    }
  }


  export interface RegUserResponse{
    
    message:string;
    Result:boolean;
    data:any;

}

export class LoggingIn{

    phone: string;
    password: string;

    constructor(){
        this.phone="";
        this.password="";
    }

}
  