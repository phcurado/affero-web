import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Product from "../models/Product";

const routes = {
  products: "products"
};

@Injectable({
  providedIn: "root"
})
export class HttpService {
  baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.baseUrl}${routes.products}`);
  }
  getProduct(id: number) {
    return this.http.get(`${this.baseUrl}${routes.products}/${id}`);
  }

  saveProduct(product: Product) {
    return this.http.post(`${this.baseUrl}${routes.products}`, { ...product });
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}${routes.products}/${id}`);
  }
}
