import { Component, Input } from '@angular/core';

@Component(
    {
        selector:'app-product',
        template:`
        <h2><a [routerLink]="['/product', product.id]" >{{product.name}}</a></h2>

        <div>Category: {{product.category}}</div>
        <div>Descripcion: {{product.descripcion}}</div>
        <div>Precio: {{product.precio}}</div>
      `,
    }
)

export class ProductComponent {
@Input() product;
}