import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) { }
}
