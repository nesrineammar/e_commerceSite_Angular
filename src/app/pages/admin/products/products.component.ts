import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  isSidePanlVisible:boolean=false;
  productObject:any={
    "sku":0,
    "name":"",
    "price":0,
    "description":"",
    "category":"",
    "productImgUrl":""
  }
  categoryList:any[]=[];
  proList:any[]=[];
  constructor(private productSrv:ProductService){}
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllPro();
    
  }
  getAllCategory(){
    this.productSrv.getAllCategory().subscribe((res:any)=>{
      this.categoryList=res;
      console.log("cat",this.categoryList);
    })
  }
  getAllPro(){
    this.productSrv.getAllpro().subscribe((res:any)=>{
      this.proList=res;
      console.log("pro",this.proList);
    })
  }
  onSave(){
    
    this.productSrv.savePro(this.productObject).subscribe((res:any)=>{
     
    })
    this.getAllPro();
  }
  editPro(item:any){
  
    this.productObject=item;
    this.productObject.sku=1;
this.open();
  }
  update(){
    this.productSrv.update(this.productObject).subscribe((res:any)=>{
      
      debugger;
      if(res.result){
        alert("updated")
        this.getAllPro();
      }else{
        alert(res.message)
      }
    })
  }
  onDelet(item:any){
    const isDelete =confirm('Are you Sure Wante to delete ') ;
    if(isDelete){
    this.productSrv.delete(item).subscribe((res:any)=>{
      this.proList=this.proList.filter(pro=>pro!=item)
      
    })}
    this.getAllPro();
  }
  open(){
    
   this.isSidePanlVisible=true; 
   ;}
  close(){
    this.productObject.id=0;
   this.productObject.name="";
   this.productObject.description="";
   this.productObject.sku="";
  
   this.productObject.price=0;
   
   
   
   this.productObject.categoryId=0,
   this.productObject.productImgUrl=""
    this.isSidePanlVisible=false;
  }
  
}
