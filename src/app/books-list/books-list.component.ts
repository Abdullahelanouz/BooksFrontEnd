import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(public service:BookService) { }

  ngOnInit(): void {
    this.service.getAllBooks();
  }
  fillDtat(item:any) {
    this.service.book.id=item.id;
    this.service.book.author=item.author;
    this.service.book.title=item.title;
    this.service.book.numberofPages=item.numberofPages;
    this.service.book.publishedAt=item.publishedAt;
  }
  delete(id:any){
    this.service.deleteBook(id).subscribe(res=>{
      this.service.getAllBooks();
    })

  }
}
