import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public themeService: ThemeService) { }
}
