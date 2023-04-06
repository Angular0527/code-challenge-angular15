import { BlogData } from '../models/blog-data';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
})
export class BlogComponent implements OnInit {
  storage_name = 'localblog';

  visible: boolean = false;
  editable: boolean = false;

  title: string = '';
  description: string = '';
  content: string = '';
  url_link: string = '';

  list_items: BlogData[] = [];
  cmItems: MenuItem[] = [];

  ngOnInit(): void {
    let local_data = localStorage.getItem(this.storage_name) != null ? localStorage.getItem(this.storage_name) : '';

    if (local_data && local_data != '')
      this.list_items = JSON.parse(local_data != null ? local_data : '');
  }

  showModal() {
    this.visible = true;
  }

  hideModal() {
    this.visible = false;
    this.title = "";
    this.description = "";
    this.content = "";
    this.url_link = "";
  }

  addItem() {
    this.list_items.push({
      title: this.title,
      content: this.content,
      image: this.url_link,
      description: this.description,
      publishedAt: this.timestampToString(new Date())?.toString()
    });

    localStorage.setItem(this.storage_name, JSON.stringify(this.list_items));

    this.hideModal();
  }

  timestampToString(date: Date) {
    const datePipeEn = new DatePipe('en-US');
    return datePipeEn.transform(date, 'dd/MM/yyyy HH:mm');
  }

  editModal(item: any) {

  }

  deleteItem(item: any) {

  }
}
