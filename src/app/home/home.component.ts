import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productSearch:string = "";
  products:Object[];

  constructor(private _data: DataService) { 

  }

  ngOnInit() {
    /*this.products = this._data.searchFlipkart()
        .subscribe(response => this.products = response);*/
  }

  compare(){ 
    if(this.productSearch != null && this.productSearch.trim() != '')
    {
      this._data.searchFlipkart(this.productSearch).subscribe(
        data => { this.products = data}, //this line will assign service response to local variable products
        err => console.error(err),//this line will log a console error, if there is any issue in getting flipkart service call
        () => console.log('done loading foods') // this line will log in console when the service call is finished
      );
    }
    else{
      alert("Enter Search Data");
    }
  }

}
