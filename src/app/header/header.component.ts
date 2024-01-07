import { Component, OnInit } from '@angular/core';

interface Column {
  field: string;
  header: string;
}
interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  products!: Product[];

  cols!: Column[];



  ngOnInit() {

          this.products = [
            {
              id: '1000',
              code: 'f230fh0g3',
              name: 'Bamboo Watch',
              description: 'Product Description',
              image: 'bamboo-watch.jpg',
              price: 65,
              category: 'Accessories',
              quantity: 24,
              inventoryStatus: 'INSTOCK',
              rating: 5
          },
          {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        }
          ];

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];
  }
}

