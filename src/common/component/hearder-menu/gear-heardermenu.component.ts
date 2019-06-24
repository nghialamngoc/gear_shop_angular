import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/common/service/category-service/category.service';

@Component({
  selector: 'app-gear-hearder-menu',
  templateUrl: './gear-heardermenu.component.html',
  styleUrls: ['./gear-heardermenu.component.scss']
})
export class HearderMenuComponent implements OnInit {

  private categories: any[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {        
    this.categoryService.getAll().subscribe( result => this.categories = result);
  }

}
