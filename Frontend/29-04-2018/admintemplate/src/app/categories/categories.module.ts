import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatSortModule, 
  MatPaginatorModule, MatSlideToggleModule } from '@angular/material';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryGroupComponent } from './category-group/category-group.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { BrandComponent } from './brand/brand.component';
@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatSortModule, 
    MatPaginatorModule, MatSlideToggleModule
  ],
  declarations: [
    CategoriesComponent,
    CategoryGroupComponent,
    CategoryComponent,
    SubCategoryComponent,
    BrandComponent
  ]
})
export class CategoriesModule { }
