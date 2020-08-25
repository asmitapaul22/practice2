import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice2';
  softbook:Book[];
  constructor(private bookservice:BookService){}
  getsoftbook()
  {
    this.bookservice.getBooksfromStore().subscribe(book)
  }
}
