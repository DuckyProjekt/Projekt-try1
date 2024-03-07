import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  trendingUrl = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';

  constructor(private http: HttpClient) { }

  searchMovies(query: string, page: number) {
    const url = `${this.baseUrl}?query=${query}&include_adult=false&language=en-US&page=${page}`;
    return this.http.get(url, this.options);
  }

  getTrendingMovies() {
    return this.http.get(this.trendingUrl, this.options);
  }
}
