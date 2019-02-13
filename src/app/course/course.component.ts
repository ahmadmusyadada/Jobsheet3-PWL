import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = 'Belajar Angular';
  Courses = [
    {id: 0, name: 'HTML'},
    {id: 1, name: 'PHP'},
    {id: 2, name: 'ANGULAR'},
    {id: 3, name: 'C#'},
    {id: 4, name: 'VB.NET'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
