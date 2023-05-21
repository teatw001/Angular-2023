import { Component } from '@angular/core';
import { Employee } from 'src/models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lab2';
  employee: Array<Employee> = [
    {
      id: 1,
      FirtName: 'Duy',
      lastName: 'Đỗ Hữu',
      birthdate: '20/4/2001',
      phoneNumber: "0988571284",
      gender: 'm',
      salary: 50,
      company: 'FPT Telecom',
    },
  ];
}
