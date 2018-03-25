import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productSearch:string = "";
  fkproducts:Object[];
  compareClicked: boolean = false;
  dataLoaded:boolean = false;
  constructor(private _data: DataService) { 

  }

  ngOnInit() {
    /*this.products = this._data.searchFlipkart()
        .subscribe(response => this.products = response);*/
  }

  compare(){ 
    if(this.productSearch != null && this.productSearch.trim() != '')
    {
      this.compareClicked = true;
      this._data.searchFlipkart(this.productSearch).subscribe(
        data => { 
          this.fkproducts = data;
          console.log(data)}, //this line will assign service response to local variable products
        err => console.error(err),//this line will log a console error, if there is any issue in getting flipkart service call
        () => {
          console.log('Done loading products');
          this.dataLoaded = true;
          this.compareClicked = false; // this line will log in console when the service call is finished
        }
      );
    }
    else{
      alert("Enter Search Data");
    }
  }

}
