import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StatementFaithComponent } from './statement-faith/statement-faith.component';
import { NewsComponent } from './news/news.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'statement-faith', component: StatementFaithComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true, useHash: true }), //useHash fixes the Can't Get Error on refresh)
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
