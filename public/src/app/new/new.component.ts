import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  response: any;
  error: any;

  constructor(
    private _router: ActivatedRoute,
    private _route: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newAuthor = {author:""}
  }
  
  createAuthor(){
    let addAuthor = this._httpService.addAuthor(this.newAuthor)
    addAuthor.subscribe(data=>{
      if((data as any).message === "Success"){
        this.newAuthor = {author:""}
        this.goHome();
      }else{
        this.error = "Author name must be at least 3 characters"
      }
    })
    
  }
  goHome(){
    this._route.navigate(['/home']);
  }
}
