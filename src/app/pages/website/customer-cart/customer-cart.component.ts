import { Component ,OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {
  id!: string;
  Product: any;
  proList:any;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Récupérer l'ID de l'URL
      this.id = params['id'];
      console.log(this.id); // Affiche l'ID dans la console

      // Appel du service pour récupérer les détails du produit seulement si l'ID est défini
      if (this.id) {
        this.getProductById();
      }
    });
    this.getAllPro();
  }

  getProductById() {
    this.productService.getProById(this.id).subscribe((res: any) => {
      this.Product = res;
      console.log("cat", this.Product);
    });
  }
  getAllPro(){
    this.productService.getAllpro().subscribe((res:any)=>{
      this.proList=res;
      console.log("pro",this.proList);
    })
  }
}
