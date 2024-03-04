import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { ThemeService } from '../theme.service';
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
    public themeService: ThemeService,
    private router: Router // Inject the Router service
  ) {}
  

  ngOnInit() {
    // Subscribe to changes in the movies array
    this.baseService.warmovies.subscribe(movies => {
      this.movies = movies;
    });
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      this.baseService.searchMovies(this.searchTerm);
      this.router.navigate(['/']); // Navigate to the root route
    }
  }
 }

