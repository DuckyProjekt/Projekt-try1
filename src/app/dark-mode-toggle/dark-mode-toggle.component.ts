import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent {
  constructor(public themeService: ThemeService) { }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}
