import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  // getCourses(){
  //   return [
  //     {id: 0, name: 'HTML'},
  //     {id: 1, name: 'PHP'},
  //     {id: 2, name: 'Angular'},
  //     {id: 3, name: 'C#'},
  //     {id: 4, name: 'VB.net'},
  //   ]
  // }

  getCourses(){
    return [
      {name: 'Author1'},
      {name: 'Author2'},
      {name: 'Author3'},
    ]
  }
}
