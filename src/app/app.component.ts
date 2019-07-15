import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-good-reads';
  books: Array<any> = [];
  totalPageCount: number;
  bookName: string;
  showLoader: boolean;
  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(page = 1) {
    this.showLoader = true;
    this.http.searchBooks({
      filter: this.bookName || 'software',
      page: page
    }).subscribe((res: any) => {
      this.showLoader = false;
      this.books = res.GoodreadsResponse.search.results.work;
      const totalResults = res.GoodreadsResponse.search["total-results"];
      this.totalPageCount = Math.floor(totalResults / 20) + (totalResults % 20 === 0 ? 0 : 1);
    });

  }
}
