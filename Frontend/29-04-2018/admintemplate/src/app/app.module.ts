import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule,
         MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignIconModule } from 'material-icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ComonModule } from './comon/comon.module';
import { CategoriesModule } from './categories/categories.module';

import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ComonModule,
    CategoriesModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule, MatSortModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialDesignIconModule,
    MatPaginatorModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }
