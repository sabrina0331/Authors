import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  thisOneAuthorId = this._httpService.editId;
  QuotePoster: any;

  constructor(
    private _httpService: HttpService, 
    private _route: Router,
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getThisOne(this.thisOneAuthorId);
    this.QuotePoster = {id: '', author: '', quote: ''}
  }

  getThisOne(thisOneAuthorId){
    let one = this._httpService.editAuthor(thisOneAuthorId)
    one.subscribe(data=>{
      console.log("from get on", data)
      this.QuotePoster = data;
    }) 
  }

}
