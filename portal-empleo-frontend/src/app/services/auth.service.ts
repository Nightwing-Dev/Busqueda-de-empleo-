import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
    isLoggedIn$ = this._isLoggedIn$.asObservable()
    constructor(private usersService: UserService) {
        const token = localStorage.getItem('token');
        this._isLoggedIn$.next(!!token)
    }

    login(user: string) {
        return this.usersService.login(user).pipe(tap((response: any) => {
            this._isLoggedIn$.next(true);
            localStorage.setItem('token', response.token);
        }));
    }
}