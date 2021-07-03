import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPostsComponent} from "./components/pages/posts/list-posts/list-posts.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {AdminComponent} from "./components/admin/admin.component";
import {LoginComponent} from "./components/pages/login/login.component";
import {NotFoundComponent} from "./components/pages/not-found/not-found.component";
import {PostComponent} from "./components/pages/posts/post/post.component";
import {NewPostComponent} from "./components/pages/posts/new-post/new-post.component";


const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },

  { path: 'posts',
    children: [
      { path: '', component: ListPostsComponent, pathMatch: 'full' },
      { path: 'new', component: NewPostComponent },
      { path: ':id', component: PostComponent },
    ]
  },

  { path: 'about', component: AboutComponent },

  { path: 'admin', component: AdminComponent },

  { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
