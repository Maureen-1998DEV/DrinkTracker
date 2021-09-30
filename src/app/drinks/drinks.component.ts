import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  data:any
  constructor(
    private http:HttpService
  ) { 
    
  }

  getData(){
    this.http.getDrinks().subscribe(res => this.data=res)
  }
  ngOnInit(){
    this.getData()
  }

}
