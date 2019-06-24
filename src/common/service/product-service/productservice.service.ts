import { Injectable } from '@angular/core';
import productMockData from '../../mock-data/product.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { };
  getAll(): Observable<any[]>{
    return of(productMockData);
  }
  getProductHot(): Observable<any[]>{
    return of(productMockData.sort((x, y) => {
      return y.discount - x.discount
    }).splice(0, 4));
  }
  getByCategoryId(id: number): Observable<any[]>{
    return of(productMockData.filter(x => x.category_id === id).splice(0, 4));
  }
}
