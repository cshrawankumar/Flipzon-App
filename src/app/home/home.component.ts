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
  amazonproducts:Object[];
  compareClicked: boolean = false;
  dataLoaded:boolean = false;
  errMsg:string = "";
  recordCount: number = 5; //hardcoded it to 5, read this from user via the radio button
  defaultImgUrl: string = null;
  constructor(private _data: DataService) { 
  }

  ngOnInit() {
  }

  compare(){ 
    if(this.productSearch != null && this.productSearch.trim() != '')
    {
      this.errMsg = "";
      this.compareClicked = true;
      this.fkproducts = null;
      this.amazonproducts = null;
      this._data.searchAmazon(this.productSearch).subscribe(
        data => { 
          this.amazonproducts = data;
          this.setDefaultImgUrl(data);
          console.log(JSON.stringify(data))}, //this line will assign service response to local variable products
        err => console.error(err),//this line will log a console error, if there is any issue in getting flipkart service call
        () => {
          console.log('Done loading products');
          if(this.fkproducts != null && this.amazonproducts != null)
          {
          this.dataLoaded = true;
          this.compareClicked = false; 
          }
        }
      );
      this._data.searchFlipkart(this.productSearch,this.recordCount).subscribe(
        data => { 
          this.fkproducts = data;
          console.log(JSON.stringify(data))}, //this line will assign service response to local variable products
        err => console.error(err),//this line will log a console error, if there is any issue in getting flipkart service call
        () => {
          console.log('Done loading products');
          if(this.fkproducts != null && this.amazonproducts != null)
          {
          this.dataLoaded = true;
          this.compareClicked = false; 
          }
        }
      );
    }
    else{
      this.errMsg = "Search Value cannot be empty..";
    }
  }

  setDefaultImgUrl(products){
    if(products != null && products.ItemSearchResponse != null && products.ItemSearchResponse.Items!= null && products.ItemSearchResponse.Items.Item != null && products.ItemSearchResponse.Items.Item[0] != null && products.ItemSearchResponse.Items.Item[0].MediumImage != null && products.ItemSearchResponse.Items.Item[0].MediumImage.URL != null)
    {
      this.defaultImgUrl = products.ItemSearchResponse.Items.Item[0].MediumImage.URL || products.ItemSearchResponse.Items.Item[0].LargeImage.URL ;
    }
  }

}
