import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Jobs } from "../interfaces/jobs.interface";


@Injectable({
    providedIn: 'root'
  })

export class JobsService{

    constructor(private http: HttpClient){}
    
     getJobs(){
         return this.http.get<any>("http://localhost:9000/jobOffers");
     }

     postJobs(){
     //   return this.http.post("");
     }

     udapteJobs(){
      //  return this.http.put("");
     }

     deleteJobs(){
        return this.http.delete("");
     }

}