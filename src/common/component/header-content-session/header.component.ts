import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from 'src/common/service/shopping-card.service/shopping-card.service';
import { Subscription } from 'rxjs';
import ShoppingCard from 'src/common/models/shopping_card.model';

@Component({
  selector: 'app-header-content',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderContentSessionComponent implements OnInit {

  private subscription: Subscription;
  private shoppingCard: ShoppingCard;

  constructor(private shoppingCardService: ShoppingCardService) { }
  
  ngOnInit() {
    this.handleShoppingCard();
  }

  handleShoppingCard(){
    this.subscription = this.shoppingCardService.getShoppingCard().subscribe(data => this.shoppingCard = data);
  }

}
