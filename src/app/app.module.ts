import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ArticleComponent } from './components/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { LatestArticleComponent } from './components/latest-article/latest-article.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ArticleComponent,
    LatestArticleComponent,
    ArticleDetailComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
