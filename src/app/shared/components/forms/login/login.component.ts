import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { IndicadoresService } from '@data/services/api/indicadores.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public pesos!: any;
  public priceDollar!: number;
  public priceEuro!: number;
  public values: Array<{
    pesos: number,
    dolar: number,
    euro:number
  }>;

  constructor(public indicadores: IndicadoresService) {
    this.values = [];
  }

  ngOnInit(): void {
    this.indicadores.getIndicadores().subscribe((item) => {
      this.priceDollar = item.dolar.valor;
      this.priceEuro = item.euro.valor;
    })
  }

  setValue(value: number) {
    this.pesos = value;
    this.values.push({
      pesos: this.pesos,
      dolar: this.pesos * this.priceDollar,
      euro: this.pesos *  this.priceEuro
    });
    this.pesos = '';
  }

  cleanValue(){
    this.values = [];
    this.pesos = '';
  }
  
}
