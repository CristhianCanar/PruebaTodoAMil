import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:3000/api'

  constructor( private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.API_URI}/products`)
  }

  getProduct(id: string) {
    return this.http.get(`${this.API_URI}/products/${id}`)
  }
  
  deleteProduct(id: string) {
    return this.http.get(`${this.API_URI}/products/${id}`)
  }
  
  updateProduct(id: string, product: Product) {
    return this.http.put(`${this.API_URI}/products/${id}`, product)
  }

  saveProduct(product: Product) {
    return this.http.post(`${this.API_URI}/products`, product)
  }
}
