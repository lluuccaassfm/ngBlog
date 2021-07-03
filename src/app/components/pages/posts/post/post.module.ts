import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./post.component";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class PostModule { }
