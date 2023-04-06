import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  value: string = '';
  visible: boolean = false;
  title: string = '';
  description: string = '';
  content: string = '';
  urlLink: string = '';

  cmItems: MenuItem[] = [];

  ngOnInit(): void {

  }

  showModal() {
    this.visible = true;
  }

  hideModal() {
    this.visible = false;
  }
}
