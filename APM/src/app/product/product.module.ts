import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convertToSpaces.pipe';
import { RouterModule } from '@angular/router';
import { Product3GuardService } from './product3-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'product', component: ProductListComponent},
      { path: 'product/:id',
        canActivate: [Product3GuardService],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    Product3GuardService
  ]
})
export class ProductModule { }
