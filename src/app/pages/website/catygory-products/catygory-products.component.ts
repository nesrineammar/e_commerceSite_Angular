import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catygory-products',
  templateUrl: './catygory-products.component.html',
  styleUrls: ['./catygory-products.component.css']
})
export class CatygoryProductsComponent implements OnInit {
public product:any=[];
public grandTotal!:number;
totalItem!:number;
constructor(private cartService: CartService){

}
ngOnInit(): void {
  this.cartService.getProducts().subscribe(res=>{
    this.product=res;
    this.totalItem=res.length;
    this.grandTotal=this.cartService.getTotalPrice();
  })
}
removeItem(item:any){
  this.cartService.removecartItem(item);
}

}
