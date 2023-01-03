import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'sevens';
  url:string = "http://localhost:8989/currentGame";

  team1:string = "";
  team2:String = "";
  fixt:String = "";


  team3:string = "";
  team4:String = "";
  fixt2:String = "";

  team5:string = "";
  team6:String = "";
  fixt3:String = "";

  team7:string = "";
  team8:String = "";
  fixt4:String = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.getDetails();
  }

  getDetails(){
    console.log("inside dets");
    this.http.get<any>(this.url).subscribe(data=>{

      console.log(data);
      this.team1 = data.matches[0].homeTeam.tla;
      this.team2 = data.matches[0].awayTeam.tla;
      this.fixt = data.matches[0].competition.name;

      this.team3 = data.matches[1].homeTeam.tla;
      this.team4 = data.matches[1].awayTeam.tla;
      this.fixt2 = data.matches[1].competition.name;

      this.team5 = data.matches[2].homeTeam.tla;
      this.team6 = data.matches[2].awayTeam.tla;
      this.fixt3 = data.matches[2].competition.name;

      this.team7 = data.matches[3].homeTeam.tla;
      this.team8 = data.matches[3].awayTeam.tla;
      this.fixt4 = data.matches[3].competition.name;

      
    },error=>{
      console.log("damn it eror");
    })


  }
}
