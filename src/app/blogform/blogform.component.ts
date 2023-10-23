import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit{
insert(blog:Blog) {
  this.service.addBlog(blog);
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private service:BlogService) {
    
  }
  categories : String[] = ['Technical', 'Personal', 'Nature'] ;
}
