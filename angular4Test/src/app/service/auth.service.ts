import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  login(name: string, password: string): boolean {
    if (name === "lhl" && password === "111") {
      localStorage.setItem("userName", name);
      return true;
    }
    return false;
  }
  loginOut() {
    localStorage.removeItem("userName");
  }
  getUser() {
    return localStorage.getItem("userName");
  }
  isLogin(): boolean {
    return this.getUser() !== null;
  }
}
