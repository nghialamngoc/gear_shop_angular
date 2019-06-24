import { Injectable } from '@angular/core';
import subCategoryColumnData from '../../mock-data/sub_category_column.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategorycolumnService {

  constructor() { }
  
  getAll(): Observable<any[]>{
    return of(subCategoryColumnData);
  }
}
