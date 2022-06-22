import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: any = []

  constructor( private productsServices: ProductsService) { }

  ngOnInit(): void {
    this.productsServices.getProducts().subscribe(
      res => {
        this.products = res
      },
      err => console.error(err)
    )
  }

}
