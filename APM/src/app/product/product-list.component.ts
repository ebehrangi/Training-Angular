
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent
                implements OnInit {
  constructor(private _productService: ProductService) {
  }
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  showImage: boolean = false;
  products: IProduct[] = [];
  filteredProduct: IProduct[];
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {

    this._listFilter = value;
    this.filteredProduct =  this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  toggleImage(): void {
    console.log('ok');
    this.showImage = !this.showImage;
    return;
  }
  ngOnInit(): void {
    this._productService.getProducts().subscribe((r) => {
      this.products = r;
      this.filteredProduct = this.products;
    });
  }
  performFilter(filter: string): IProduct[] {
    return this.products.filter( (product: IProduct) => product.productName.toLowerCase().indexOf(filter) !== -1 );
  }
  onRatingClicked(event: string): void {
    this.pageTitle = 'Product Title ' + event;
  }
}
