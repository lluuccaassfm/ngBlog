import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from "./shared/components/toolbar/toolbar.component";

/* Firebase */
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from "../environments/environment";
import { ReactiveFormsModule } from "@angular/forms";
import {PostModule} from "./components/pages/posts/post/post.module";
import {ListPostsModule} from "./components/pages/posts/list-posts/list-posts.module";
import {LoginModule} from "./components/pages/login/login.module";
import {AboutModule} from "./components/pages/about/about.module";
import {AdminModule} from "./components/admin/admin.module";
import {NotFoundModule} from "./components/pages/not-found/not-found.module";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    PostModule,
    ListPostsModule,
    LoginModule,
    AboutModule,
    AdminModule,
    NotFoundModule
  ],
  providers: [
    // { provide: StorageBucket, useValue: 'gs://ngblob.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
