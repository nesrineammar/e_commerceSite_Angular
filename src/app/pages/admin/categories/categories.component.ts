import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList:any[]=[];
  //products$:Observable<any>;
  constructor(private productSrv:ProductService){
/*this.products$=this.productSrv.getAllCategory();
console.log("pro",this.products$);*/
  }
  getAllCategory(){
    this.productSrv.getAllCategory().subscribe((res:any)=>{
      this.categoryList=res;
      console.log("pro",this.categoryList);
    })
  }
  ngOnInit(): void {
    this.getAllCategory();
  }
}
