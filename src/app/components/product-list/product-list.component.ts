import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { MatDialog } from "@angular/material/dialog";
import { ProductFormComponent } from "../product-form/product-form.component";
import Product from "src/app/models/Product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  displayedColumns: string[] = ["id", "name", "quantity", "edit", "delete"];
  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.httpService.getProducts().subscribe((response: Array<Product>) => {
      this.products = response;
    });
  }

  addProduct() {
    this.dialog.open(ProductFormComponent, {
      data: { product: {} },
      width: "400px"
    });
  }
  getProduct(id: number) {
    this.httpService.getProduct(id).subscribe((response: Product) => {
      this.dialog.open(ProductFormComponent, {
        data: { product: response },
        width: "400px"
      });
    });
  }

  deleteProduct(id: number) {
    this.httpService.deleteProduct(id).subscribe(response => {
      window.location.reload();
    });
  }
}
