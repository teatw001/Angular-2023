import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  message: string = '';

  search(event:any): void {
    console.log(event);
    this.message = event.target.message.value
    console.log(event.target.message.value);
  }
  clickSearch ():void{
    console.log("Bạn đang tìm kiếm");

  }
}
