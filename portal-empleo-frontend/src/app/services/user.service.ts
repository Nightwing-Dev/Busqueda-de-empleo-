import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Users } from "../interfaces/users.interface";


@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {
    }

    login(user: any) {
        return this.http.post("http://localhost:9000/login", user);
    }
    
    register(registerUser: any){
        return this.http.post("http://localhost:9000/register", registerUser);
    }
    

    //   deleteUser(id: id): Observable<deleteUser> {
    //      return this.http.delete<deleteUser>("htts://reqres.in/api/users/2", +id);
    //}

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