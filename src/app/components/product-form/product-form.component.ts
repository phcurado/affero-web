import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material";
import Product from "src/app/models/Product";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"]
})
export class ProductFormComponent implements OnInit {
  product: Product;
  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private httpService: HttpService
  ) {
    if (data.product) {
      this.product = data.product;
    }
  }

  ngOnInit() {}

  confirmProduct() {
    this.httpService.saveProduct(this.product).subscribe(response => {
      window.location.reload();
    });
  }
}
