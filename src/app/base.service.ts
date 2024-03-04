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

  baseUrl = "https://api.themoviedb.org/3/search/movie";
  public warmovies = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {
    const url = `${this.baseUrl}?query=${query}&include_adult=false&language=en-US&page=1`;
    return this.http.get(url, this.options).subscribe(
      (res: any) => this.warmovies.next(res)
    );
  }
}
