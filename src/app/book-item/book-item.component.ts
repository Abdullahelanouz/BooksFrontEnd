import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  constructor(public service: BookService) {}

  ngOnInit(): void {
    this.service.book = {
      id: 0,
      title: null,
      author: null,
      numberofPages: null,
      publishedAt: null,
    };
  }
  submit() {
    if (this.service.book.id == 0) {
      this.service.postBook().subscribe(
        (res) => {
          this.service.getAllBooks();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.service.putBook().subscribe(
        (res) => {
          this.service.getAllBooks();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
