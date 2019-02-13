import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'INI Tugas Pertama Biodata';
  date = new Date();
  nama = 'Ahmad Musyadad Aminullah';
  alamat = 'Jl. Mawar gang 11';
  
  Courses;

  get format(){
    return 'fullDate';
  }
  
  constructor(private service: CoursesService) {
    this.Courses = service.getCourses();
  }

  ngOnInit() {
  }

}