import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewapiResolver } from './services/newapi.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: { articleList: NewapiResolver },
    // children: [
    //   { path: 'article-detail', component: ArticleDetailComponent }
    // ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'article-detail',
    component: ArticleDetailComponent,
    canActivate: [AuthGuard],
  },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
