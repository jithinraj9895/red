import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url:string = "https://api.football-data.org/v4/matches/";
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
  }


}
