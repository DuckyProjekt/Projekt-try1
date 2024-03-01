import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'search', component: SearchComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

