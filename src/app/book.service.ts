import { Injectable } from '@angular/core';
import { Book } from './book.model';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string="https://localhost:44335/api/Books"
  books:Book[] | undefined;
  constructor(private http:HttpClient) {}
    getAllBooks(){
      this.http.get(this.url).toPromise().then(
        res=>{
          this.books =res as Book[];
        }
      )
    }
   }



