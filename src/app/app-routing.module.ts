import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'articles/:articleId', component: ArticleDetailComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
