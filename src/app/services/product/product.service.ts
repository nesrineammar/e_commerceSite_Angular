import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllCategory(){
    return this.http.get("http://localhost:3000/Category");
  }
  savePro(obj:any){
    return this.http.post("http://localhost:3000/products",obj);
  }
  getAllpro(){
    return this.http.get("http://localhost:3000/products");
  }
  update(obj:any){
    return this.http.put("http://localhost:3000/products/"+obj.id,obj);
  }
  delete(obj:any){
    return this.http.delete("http://localhost:3000/products/"+obj.id);
  }
  getProById(id:any){
    return this.http.get("http://localhost:3000/products/"+id);
  }
}
