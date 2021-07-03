import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPostsComponent} from "./list-posts.component";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [ListPostsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ]
})
export class ListPostsModule { }
