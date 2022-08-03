import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserRecluiter } from './user-recluiter.service';


@Injectable({
    providedIn: 'root'
})
export class AuthRecluiterService {

    private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
    isLoggedIn$ = this._isLoggedIn$.asObservable()
    constructor(private userrecluiter: UserRecluiter) {
        const token = localStorage.getItem('token');
        this._isLoggedIn$.next(!!token)
    }

    loginReclu(user: string) {
        return this.userrecluiter.login(user).pipe(tap((response: any) => {
            this._isLoggedIn$.next(true);
            localStorage.setItem('token', response.token);
        }));
    }
}

