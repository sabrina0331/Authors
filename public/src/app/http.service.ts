import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  editId;

  constructor(private _http: HttpClient) {}

  showAll(){
    return this._http.get('/home')
  }
  addAuthor(newAuthor){
    return this._http.post('/add',newAuthor)
  }

  editAuthor(id){
    this.editId = id;
    return this._http.get('/edit/'+id);
  }
  updateAuthor(thisAuthor){
    return this._http.put(`/updateOne/${thisAuthor._id}`,thisAuthor);
  }
  deleteAuthor(id){
    return this._http.delete('/deleteOne/'+id)
  }
 
}
