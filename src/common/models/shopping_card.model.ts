import ShoppingCardItem from './shopping_card_item';

export default class ShoppingCard{
  count: number;
  productList: ShoppingCardItem[]

  constructor(count: number, productList: any[]){
    this.count = count;
    this.productList = productList;
  }
}