import { Product, products } from './product';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = signal<Product[]>(products);
  totalCartItens = signal(0);
  
  addToCart() {
    this.totalCartItens.update(value => value + 1);
  }
}
