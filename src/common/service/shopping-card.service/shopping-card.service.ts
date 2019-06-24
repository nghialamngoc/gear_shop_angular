import { Injectable } from '@angular/core';
import ShoppingCard from '../../models/shopping_card.model';
import { Observable, of } from 'rxjs';
import ShoppingCardItem from 'src/common/models/shopping_card_item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService{
  private shoppingCard: ShoppingCard = {
    count: 0,
    productList: []
  }
  constructor() {
    if(!this.shoppingCard)
      this.shoppingCard = new ShoppingCard(0, [])    
  }  
  getShoppingCard(): Observable<ShoppingCard>{
    return of(this.shoppingCard);
  }
  addShoppingCard(product: any){
    
    this.shoppingCard.count += 1;
    const productIndex = this.shoppingCard.productList.findIndex(x => x.productName === product.name)

    if( productIndex >= 0)
      this.shoppingCard.productList[productIndex].quantity += 1;
    else
      this.shoppingCard.productList.push({
        productId: product._id,
        productImage: product.img_link,
        productPrice: product.price,
        productName: product.name,
        quantity: 1
      });

    console.log(this.shoppingCard)
  }
}
