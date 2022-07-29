import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class UserRecluiter {

    constructor(private http: HttpClient) {}

    login(user: any) {
        return this.http.post("http://localhost:9000/loginRecluiter", user);
    }
    
    register(registerUser: any){
        return this.http.post("http://localhost:9000/registerRecluiter", registerUser);
    }

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }
    getToken(): string | null {
        return localStorage.getItem('token');
    }
    isLoggedIn() {
        return this.getToken() === null;
    }

}