import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authData {
  id: string;
  issue_name: string;
  issue_message: string;
}
export class AuthService {

  constructor() { }
  
}
