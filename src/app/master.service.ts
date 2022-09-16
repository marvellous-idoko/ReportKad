import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  // server = 'http://localhost:3000/';
  server = 'https://voyage-chaise-91976.herokuapp.com/' 
  

  headers = new HttpHeaders()

  constructor(private Http: HttpClient) {
    this.headers.append('Content-Type', 'applicatiion/json');
  } 
   createSch(email:string){
    return this.Http.post(this.server + 'mstr/CreateSchool', {email: email}, { headers: this.headers })
  }
}
