import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url:string = "https://sevensbackend-production.up.railway.app/articles";
  burl:string = ""
  arr:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.getAllarcticles();
  }

  getAllarcticles(){
    this.http.get(this.url).subscribe(data=>{
        this.arr = data;
        console.log(this.arr[1].title);
    })
  }


}
