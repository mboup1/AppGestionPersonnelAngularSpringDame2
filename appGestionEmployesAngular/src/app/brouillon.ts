import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private tokenKey = 'auth_token'; // Key for the token in localStorage


  constructor() {
    this.loadToken();
  }

  private _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this._isLoggedIn.asObservable();

  get isLoggedIn(): boolean {
    return this._isLoggedIn.getValue();
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn.next(value);
  }

  private loadToken(): void {
    // const token = localStorage.getItem(this.tokenKey);
    // if (token) {
      this.isLoggedIn = true;
    // }
  }

  login(name: string, password: string): boolean {
    if (name === 'dame' && password === 'dame') {
      const token = "s%3AQlNNTt0yfMHpfpHKgNi9WGD-LbvSz9GJ.F8rZDm%2FUSq7An4OX2%2BVPEip3AFxt2u1wd8qb5NIDhrs";
      // localStorage.setItem(this.tokenKey, token); // Store the token
      // window.location.reload();
      return this.isLoggedIn = true;
    }
    return false;
  }

  logout(): void {
    // localStorage.removeItem(this.tokenKey); // Remove the token on logout
    this.isLoggedIn = false;
  }
}
