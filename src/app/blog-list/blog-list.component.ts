import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{
  blogs: Blog[] = [];
  constructor(private service : BlogService) {

  }
  ngOnInit(){
    this.blogs = this.service.getBlogs();
  }


}
