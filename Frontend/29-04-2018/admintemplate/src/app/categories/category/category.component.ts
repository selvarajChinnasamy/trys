import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, MatIconModule,MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  color = 'accent';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}


export interface Element {
  name: string;
  position: string;
  weight: number;
  symbol: string;
  action:string;
}

const ELEMENT_DATA: Element[] = [
  {position: 'TV and Video', name: 'Electronics & Office', weight: 1.0079, symbol: 'H', action:'Edit'},
  {position: 'iPad and Tablets', name: 'Electronics & Office', weight: 4.0026, symbol: 'He', action:'Edit'},
  {position: 'Auto Electronics', name: 'Electronics & Office', weight: 6.941, symbol: 'Li', action:'Edit'},
  {position: 'Cameras and Camcorders', name: 'Electronics & Office', weight: 9.0122, symbol: 'Be', action:'Edit'},
  {position: 'Portable Audio', name: 'Electronics & Office', weight: 10.811, symbol: 'B', action:'Edit'},
  {position: 'Cell Phones', name: 'Electronics & Office', weight: 12.0107, symbol: 'C', action:'Edit'},
  {position: 'Computers', name: 'Electronics & Office', weight: 14.0067, symbol: 'N', action:'Edit'},
  {position: 'Office Supplies', name: 'Electronics & Office', weight: 15.9994, symbol: 'O', action:'Edit'},
  {position: 'Smart Home', name: 'Electronics & Office', weight: 18.9984, symbol: 'F', action:'Edit'},
  {position: 'Wearable Tech', name: 'Electronics & Office', weight: 20.1797, symbol: 'Ne', action:'Edit'},
  {position: 'Video Games', name: 'Electronics & Office', weight: 22.9897, symbol: 'Na', action:'Edit'},
  {position: 'Shop Electronics', name: 'Electronics & Office', weight: 24.305, symbol: 'Mg', action:'Edit'},
  {position: 'Monitors', name: 'Electronics & Office', weight: 26.9815, symbol: 'Al', action:'Edit'},
  {position: 'Software', name: 'Electronics & Office', weight: 28.0855, symbol: 'Si', action:'Edit'},
  {position: 'Accessories', name: 'Electronics & Office', weight: 30.9738, symbol: 'P', action:'Edit'},
  {position: 'Office Electronics', name: 'Electronics & Office', weight: 32.065, symbol: 'S', action:'Edit'},
  {position: 'Headphones', name: 'Electronics & Office', weight: 35.453, symbol: 'Cl', action:'Edit'},
  {position: 'Android Tablets', name: 'Electronics & Office', weight: 39.948, symbol: 'Ar', action:'Edit'},
  {position: 'TV Accessories', name: 'Electronics & Office', weight: 39.0983, symbol: 'K', action:'Edit'},
  {position: 'Cases and Accessories', name: 'Electronics & Office', weight: 40.078, symbol: 'Ca', action:'Edit'},
];
