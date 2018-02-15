import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail - ';
  product: IProduct;
  constructor(private _router: Router, private _route: ActivatedRoute, private _productService: ProductService) {
    console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += id;
    this._productService.getProducts().subscribe((p) => this.product = p[id]);
  }

  onBack(): void {
    this._router.navigate(['/product']);
  }

}
