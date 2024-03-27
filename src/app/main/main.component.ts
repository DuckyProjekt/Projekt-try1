import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { BaseService } from '../base.service';
import { Subject, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy {
  movies: any;
  searchQuery: string = '';
  currentPage: number = 1;
  searchSubscription!: Subscription;
  allGenres: any[] = [];
  languages: any[] = [];

  @ViewChild('topOfPage') topOfPage!: ElementRef;

  constructor(private base: BaseService) {
    this.getTrendingMovies();
  }

  ngOnInit() {
    this.base.getTvGenres().subscribe((res: any) => {
      this.allGenres = res.genres;
    });
  
    this.base.getMovieGenres().subscribe((res: any) => {
      this.allGenres = [...this.allGenres, ...res.genres];
    });

    this.base.getLanguages().subscribe((res: any) => {
      this.languages = res;
    })
  

  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  searchButton() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    this.currentPage=1;
    this.searchSubscription = this.base.searchMovies(this.searchQuery, this.currentPage).subscribe(
      (res: any) => {
        this.movies = res.results;
      }
    );
  }
  pageTurn() {
    this.scrollToTop();
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    this.searchSubscription = this.base.searchMovies(this.searchQuery, this.currentPage).subscribe(
      (res: any) => {
        this.movies = res.results;
      }
    );
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextPage() {
    this.currentPage++;
    this.pageTurn();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageTurn();
    }
  }


  getTrendingMovies() {
    this.base.getTrendingMovies().subscribe(
      (res: any) => {
        this.movies = res.results;
      }
    );
  }
  
  getGenreName(genreId: number) {
    const genre = this.allGenres.find(genre => genre.id === genreId);
    return genre ? genre.name : '';
  }

  getLanguageName(languageCode: string) {
    const language = this.languages.find(lang => lang.iso_639_1 === languageCode);
    return language ? language.english_name : languageCode;
  }
}
