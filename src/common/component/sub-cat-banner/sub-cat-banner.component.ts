import { Component, OnInit, Input } from "@angular/core";
import { SubcategorycolumnService } from "src/common/service/sub-category-column-service/subcategorycolumn.service";

@Component({
  selector: "app-sub-cat-banner",
  templateUrl: "./sub-cat-banner.component.html",
  styleUrls: ["./sub-cat-banner.component.scss"]
})
export class SubCatBannerComponent implements OnInit {
  @Input("categoryId") categoryId: number;

  private subCategoryColumnData: any[];

  constructor(private subCategoryColumnService: SubcategorycolumnService) {}

  ngOnInit() {
    this.subCategoryColumnService
      .getAll()
      .subscribe(
        result =>
          (this.subCategoryColumnData = result.filter(
            x => x.category_id === this.categoryId
          ))
      );
  }
}
