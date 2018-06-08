import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoryGroupComponent } from './category-group/category-group.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { BrandComponent } from './brand/brand.component';
import { AuthGuard } from '../auth-guard.service';

const categoriesRoutes: Routes = [
  {
    path: 'category-group',
    component: CategoryGroupComponent,
    
  },
  {
    path: 'category',
    component: CategoryComponent,
    
  },
  {
    path: 'sub-category',
    component: SubCategoryComponent,
    
  },
  {
    path: 'brand',
    component: BrandComponent,
    
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      categoriesRoutes
    )
  ],
  declarations: [],
  exports: [RouterModule],
})
export class CategoriesRoutingModule { }
