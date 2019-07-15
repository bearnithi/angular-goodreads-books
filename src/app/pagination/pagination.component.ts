import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number;
  currentPage: number = 1;
  @Output() page = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
      this.currentPage++;
      this.page.emit(this.currentPage);
    }
  }

  prevPage() {
    if(this.currentPage > 0) {
      this.currentPage--;
      this.page.emit(this.currentPage);
    }
  }

}
