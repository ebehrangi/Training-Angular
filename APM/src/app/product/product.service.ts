import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

 @Injectable()
 export class ProductService {
    private _productUrl: string = './api/products/products.json';
    constructor(private _http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
                        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse): Observable<IProduct[]> {
        console.log(err.message);
        return Observable.throw(err.message);
    }
    getServicex (): IProduct[] {
        return [ {
            'productId': 1,
            'productName': 'Leaf Rake',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 9.9555,
            'starRating': 1.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'Gdn-0022',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.9927,
            'starRating': 4.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        }];
    }
 }
