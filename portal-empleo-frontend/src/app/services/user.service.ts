import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Users } from "../interfaces/users.interface";


@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {}

    login(user: any) {
        return this.http.post("http://localhost:9000/login", user);
    }
    
    register(registerUser: any){
        return this.http.post("http://localhost:9000/register", registerUser);
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