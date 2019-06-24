import { Injectable } from '@angular/core';
import categoryData from '../../mock-data/category.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAll(): Observable<any[]> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(categoryData);
    return of(categoryData);
  }

}
