import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products =[
    {id:1, name:'huevo', category:'food', descripcion:'lorem egg', precio:1},
    {id:2, name:'pan', category:'food', descripcion:'lorem pan', precio:10},
    {id:3, name:'carne', category:'food', descripcion:'lorem carne', precio:100}
    
    ];

    getAllProducts(){
      return this.products;
    }

    getProductById(id){
      return this.products.filter((product) => product.id == id);
    }
}
