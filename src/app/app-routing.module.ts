import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { CatygoryProductsComponent } from './pages/website/catygory-products/catygory-products.component';

const routes: Routes = [
  {path:'',
    redirectTo:'shop',
    pathMatch:'full'
  },{
    path:'login',component:LoginComponent
  },
  {
    path:'shop',component:LandingComponent
  },{
    path:'shop_detail/:id',component:CustomerCartComponent
  },
  {
    path:'cart',component:CatygoryProductsComponent
  },

  {path:'',
  component:LayoutComponent,
    children:[
      {path:'products',
        component:ProductsComponent
      },
      {path:'category',
      component:CategoriesComponent
    }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
