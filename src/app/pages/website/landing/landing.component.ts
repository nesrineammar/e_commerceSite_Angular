import { Component, OnInit } from '@angular/core';
import { CarteClass } from 'src/app/model/Model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  proList:any[]=[];
  categoryList:any[]=[];
  cardObj:CarteClass=new CarteClass();
  public totalItem:number=0;

  constructor(private productSrv:ProductService, private cartSerice:CartService){}
  ngOnInit(): void {
    this.getAllPro();
    this.getAllCategory();
    this.cartSerice.getProducts().subscribe(res=>{
    this.totalItem=res.length;
    })
  }

  getAllPro(){
    this.productSrv.getAllpro().subscribe((res:any)=>{
      this.proList=res;
     this.proList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
     })
    })
  }
  getAllCategory(){
    this.productSrv.getAllCategory().subscribe((res:any)=>{
      this.categoryList=res;
      
    })
  }
  onAddToCart(){
    
  }
  addToCart(product:any){
    this.cartSerice.addTocart(product);

  }
}
