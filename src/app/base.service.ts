import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGIwNTJkZTA4NWU4NzM1YjQ0OWQ2ZGJmYTU1ODcwYSIsInN1YiI6IjY1MWFkYjlmOTNiZDY5MDBmZTRhMTU1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1C6EkNpjVDI-OfI6AnNDL3G9U4upzwXvCN9p4s40Pkc'
    }
  }

  url = "https://api.themoviedb.org/3/search/movie?query=war&include_adult=false&language=en-US&page=1"

  public warmovies =new BehaviorSubject([])

  constructor(private http:HttpClient) {
    this.getWarMovies()
   }

  getWarMovies(){
    return this.http.get(this.url, this.options).subscribe(
      (res:any)=>this.warmovies.next(res)
    )
  }



}
