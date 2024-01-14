import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    CategoryContainerComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CategoryModule { }
