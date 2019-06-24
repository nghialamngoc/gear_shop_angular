import { Component, OnInit, Input } from '@angular/core';
import { ProductserviceService } from 'src/common/service/product-service/productservice.service';
import { ShoppingCardService } from 'src/common/service/shopping-card.service/shopping-card.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {
  @Input('showHot') showHot: boolean;
  @Input('showByCategoryId') showByCategoryId: number;
  private title: string = '';
  private data: any[];
  constructor(private productService: ProductserviceService, private shoppingCardService: ShoppingCardService) { }

  ngOnInit() {
    if(this.showHot)
    {
      this.title = "GEARVN DEAL - Deal shock mỗi ngày";
      this.productService.getProductHot().subscribe(result => this.data = result);

    }
    else{
      let categoryName = ""
      switch (this.showByCategoryId) {
        case 2:
          categoryName = "Laptop ASUS"
          break;
        case 3:
          categoryName = "Laptop ACER"
          break;
        case 4:
          categoryName = "Laptop MSI"
          break;
        default:
          break;
      }
      this.title = "GEARVN - " + categoryName;
      this.productService.getByCategoryId(this.showByCategoryId).subscribe(result => this.data = result)
      
    }
  }

}
