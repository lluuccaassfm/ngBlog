import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string
  }[] = [
    {
      id: '1',
      titlePost: 'Post One',
      contentPost: 'Conteúdo 1',
      imagePost: 'https://i.picsum.photos/id/237/200/300.jpg'
    },
    {
      id: '2',
      titlePost: 'Post Two',
      contentPost: 'Conteúdo 2',
      imagePost: 'https://i.picsum.photos/id/38/200/300.jpg'
    },
    {
      id: '3',
      titlePost: 'Post Three',
      contentPost: 'Conteúdo 2',
      imagePost: 'https://i.picsum.photos/id/38/200/300.jpg'
    },
    {
      id: '4',
      titlePost: 'Post Four',
      contentPost: 'Conteúdo 2',
      imagePost: 'https://i.picsum.photos/id/237/200/300.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
