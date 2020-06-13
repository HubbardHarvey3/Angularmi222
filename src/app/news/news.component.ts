import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  blogs: any = [];
  blogTitle: '';
  blogContent = '';
  constructor(private svc: ApiService) { }

  submitBlogEntry() {
    //adds the current content from the input form to the blogs array.  
    //next step is to create a Post function in the service module to add the new blog to the json.
    //then once the blog.json is updated, we will need to refresh the ngFor loop to see it below.
    this.blogs.unshift({ 'blogTitle': this.blogTitle, 'blogContent': this.blogContent })
    console.log('*********************')
    console.log(this.blogs)
    this.svc.updateJson(this.blogs)
    this.blogTitle = "";
    this.blogContent = ""
  }

  ngOnInit(): void {
    this.svc.getJson().subscribe(data => {
      this.blogs = data;
    })
  }

}
