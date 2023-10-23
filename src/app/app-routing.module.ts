import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { BlogformComponent } from './blogform/blogform.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'list', component:BlogListComponent},
  {path:'create', component:BlogformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule,BlogListComponent,BlogformComponent],
  declarations: [
    BlogListComponent,
    BlogformComponent
  ]
})
export class AppRoutingModule { }
