import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  movies:any

  constructor(private base:BaseService){
    this.base.warmovies.subscribe(
      (res:any)=>this.movies = res.results
    )

  }
}
