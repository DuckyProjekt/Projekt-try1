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

  baseUrl = "https://api.themoviedb.org/3/search/multi";
  trendingUrl = 'https://api.themoviedb.org/3/trending/all/day?language=hu-HU';
  tvGenresUrl = 'https://api.themoviedb.org/3/genre/tv/list?language=hu';
  movieGenresUrl = 'https://api.themoviedb.org/3/genre/movie/list?language=hu';
  languagesUrl = 'https://api.themoviedb.org/3/configuration/languages';

  constructor(private http: HttpClient) { }

  searchMovies(query: string, page: number) {
    var url = `${this.baseUrl}?query=${query}&include_adult=false&language=hu-HU&page=${page}`;
    if (query=='') {
      url=this.trendingUrl
    }
    return this.http.get(url, this.options);
  }

  getTrendingMovies() {
    return this.http.get(this.trendingUrl, this.options);
  }

  getTvGenres() {
    return this.http.get(this.tvGenresUrl, this.options);
  }
  getMovieGenres() {
    return this.http.get(this.movieGenresUrl, this.options);
  }

  getLanguages() {
    return this.http.get(this.languagesUrl, this.options);
  }
}
