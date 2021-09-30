import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http:HttpClient
  ) {}
  getDrinks(){
     return this.http.get('https://ougo-restapi.herokuapp.com/drinks')
  }

}
