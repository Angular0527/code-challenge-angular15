import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent {
  tabList = [
    {title: 'Local'},
    {title: 'Remote'},
    {title: 'Remote +'}
  ];
}
