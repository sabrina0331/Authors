import { Component, OnInit } from '@angular/core';
import {HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  authors: any;
  thisAuthor: any;
  changedAuthor: any;
  
  
  constructor(private _httpService: HttpService,
    private _route: Router,
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.showAllAuthors();
    this.thisAuthor = {id: '', author: ''};
    this._router.params.subscribe((params: Params)=>{
    this.thisAuthor = {id: params['id'], author: this.thisAuthor.author};
    this._httpService.editAuthor(this.thisAuthor);
     console.log("Data from this thisAuthor", this.thisAuthor);
   });
  }

  showAllAuthors(){
    let allAuthors = this._httpService.showAll();
    allAuthors.subscribe(data=>{
      this.authors = data;
    })
  }
  deleteAuthor(id){
    let de =this._httpService.deleteAuthor(id);
    de.subscribe(data=>{
      this.showAllAuthors();
    })
}
  
showAuthor(id){
  let showOne = this._httpService.editAuthor(id);
  showOne.subscribe(data=>{
    console.log("show one", data)
    this.goEdit();
  })
}
 goEdit(){
   this._route.navigate(['/edit'])
 }
 
  
}
