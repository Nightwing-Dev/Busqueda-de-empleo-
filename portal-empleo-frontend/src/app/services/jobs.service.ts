import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })

export class JobsService{

    constructor(private http: HttpClient){}
    
     getJobs(){
         return this.http.get("");
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