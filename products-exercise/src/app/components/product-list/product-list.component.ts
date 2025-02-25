import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, image: 'https://www.costco.com.mx/medias/sys_master/products/h67/hbf/188081224646686.jpg' },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, image: 'https://i5.walmartimages.com/asr/0c32366a-f919-436c-9b3e-7e23685b83a0.15ea190262784ac6058dfa233281ce43.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, image: 'https://m.media-amazon.com/images/I/71YZxO0GBSL.jpg' },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, image: 'https://mx-media.hptiendaenlinea.com/magefan_blog/hero-monitor-gaming-34.jpg' },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, image: 'https://m.media-amazon.com/images/I/61CJJ297IJL._AC_UF894,1000_QL80_.jpg' },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, image: 'https://m.media-amazon.com/images/I/615H13dcOUL._AC_UF894,1000_QL80_.jpg' },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, image: 'https://cdn.thewirecutter.com/wp-content/media/2024/08/laserprinters-2048px-02603-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024' },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image: 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/slate-blue/blue-01-solo4.jpg' },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, image: 'https://m.media-amazon.com/images/I/71O-02eW61L.jpg' },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, image: 'https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF894,1000_QL80_.jpg' },
  ];
  @Output() selectedProduct = new EventEmitter<Product>();

  selectProduct(product: Product): void {
    this.selectedProduct.emit(product);
  }
}

