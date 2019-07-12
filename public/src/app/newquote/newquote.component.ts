import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {
  newQuote = {};
  
  constructor(
    private _router: ActivatedRoute,
    private _route: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newQuote = {author:"", quote:""}
  }

  getTheAuthor 
  createQuote(){
    let new_Quote = this._httpService.addQuote(this.newQuote);
    new_Quote.subscribe(data=>{
      console.log(this.newQuote)
      this.goAllQuotes();
    })
  }
  goAllQuotes(){
    this._route.navigate(['/quotes'])
  }
}
