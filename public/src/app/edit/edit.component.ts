import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  authors: any;
  thisAuthor: any;
  thisOneId = this._httpService.editId;
  author: any;
  error: any;

  constructor(
    private _httpService: HttpService, 
    private _route: Router,
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.thisAuthor = {id: '', author: ''};
    this._router.params.subscribe((params: Params)=>{
    this.thisAuthor = {id: params['id'], author: this.thisAuthor.author};
    this._httpService.editAuthor(this.thisAuthor);
     console.log("Data from this thisAuthor", this.thisAuthor);
     this.getOne(this.thisOneId);
   });
  } 
  
  getOne(thisOneId){
    let one = this._httpService.editAuthor(thisOneId)
    one.subscribe(data=>{
      console.log("from get on", data)
      this.thisAuthor = data;
      // this.author = {author: this.thisAuthor.author}
      console.log("author", this.thisAuthor.author)
    }) 
  }

  updateAuthor(thisAuthor){
    let showOne = this._httpService.updateAuthor(thisAuthor);
    showOne.subscribe(data=>{
      if((data as any).message === "Success"){
        console.log("try to update", data)
        this.thisAuthor = data;
        this.goHome();
      }else{
        this.error = "Author name must be at least 3 characters";
        
      }
     
     
    })
  }
    goHome(){
      this._route.navigate(['/home'])
    
  }
}
