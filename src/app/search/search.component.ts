import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  movies: any[] = [];

  constructor(
    private baseService: BaseService,
    private router: Router
  ) {}
  

  ngOnInit() {
    this.baseService.warmovies.subscribe(movies => {
      this.movies = movies;
    });
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      this.baseService.searchMovies(this.searchTerm);
      this.router.navigate(['/']);
    }
  }
 }

