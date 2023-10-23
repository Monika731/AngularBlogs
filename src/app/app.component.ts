import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monika';
  image = '../assets/cake.jpg';
  choice = false;
  show() {
    alert("button clicked");
  }
}
