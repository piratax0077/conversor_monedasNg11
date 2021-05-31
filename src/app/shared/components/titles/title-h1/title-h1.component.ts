import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ITitleH1 } from './title-h1.metadata';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit, OnChanges {

  @Input() text :string = '';
  @Input() type : 'primary' | 'secondary' | 'success ' | 'danger' | 'warning' | 'dark' = 'primary';
  @Input() pricePesos!: number;

  public priceDollar: number;
  public priceEuro: number;
  
  @Output() resetDollar = new EventEmitter();

  constructor() { 
    this.pricePesos = 0;
    this.priceDollar = 0;
    this.priceEuro = 0;
  }

  ngOnChanges(c: SimpleChanges): void {
    if(c.pricePesos && c.pricePesos.currentValue){
      this.pricePesos = c.pricePesos.currentValue;
      this.priceDollar = this.pricePesos * this.getPriceDollarFromApi();
      this.priceEuro = this.pricePesos * this.getPriceEuroFromApi();
    }
  }

  ngOnInit(): void {
    console.log('ngoninit');
  }

  getPriceDollarFromApi(){
    return 700;
  }

  getPriceEuroFromApi(){
    return 820;
  }



}
