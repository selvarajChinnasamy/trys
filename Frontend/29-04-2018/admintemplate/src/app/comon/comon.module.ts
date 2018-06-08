import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'ng-sidebar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule} from '@angular/material';

import { ComonComponent } from './comon.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
@NgModule({
  imports: [
    CommonModule,
    SidebarModule.forRoot(),
    MatExpansionModule,
    MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule
  ],
  declarations: [
    ComonComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ]
})
export class ComonModule { }
