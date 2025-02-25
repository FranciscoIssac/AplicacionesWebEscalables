import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CommonModule, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products-exercise';

  selectedProduct = {
    name: 'Ejemplo Producto',
    image: 'https://via.placeholder.com/150',
    price: 100,
    inStock: true,
    onSale: false,
  };

  onProductSelected(product: any) {
    this.selectedProduct = product;
  }

}
