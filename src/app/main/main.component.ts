import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  movies: any;

  constructor(private base: BaseService) {
    this.base.warmovies.subscribe(
      (res: any) => this.movies = res.results
    );
  }

  ngOnInit() {
    const moviesJson = '{{movies|json}}';
    this.movies = JSON.parse(moviesJson);
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}

// genre_ids
// id
// original_language
// original_title
// overview
// poster_path
// release_date
// title