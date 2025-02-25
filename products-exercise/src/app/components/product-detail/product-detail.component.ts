import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  @Input() product!: { 
    name: string;
    image?: string;
    price: number;
    inStock: boolean;
    onSale: boolean;
  };
}
