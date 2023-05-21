import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  message: string = '';
  today: number = Date.now();

  search(): void {
    console.log(this.message);

  }
  clickSearch ():void{
    console.log("Bạn đang tìm kiếm");

  }
}
