import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post:{
    id: string,
    titlePost: string,
    contentPost: string,
    imagePost: string
  } = {
    id: '1',
    titlePost: 'Poste One',
    contentPost: 'Hola Mundo ',
    imagePost: 'https://i.picsum.photos/id/866/200/300.jpg'
  }


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.post.id = this.route.snapshot.params.id;
  }

}
