import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.scss']
})
export class CardLoaderComponent implements OnInit {

  @Input() imageSize = 75;
  @Input() barHeight = 15;
  @Input() bars = 1;

  public totalBars:any = [];
  public finalStyleImage = {};
  public finalStyleBar = {}

  constructor() { }

  ngOnInit(): void {
    // Calculate total bars
    for(let i = 0; i < this.bars; i++){
      this.totalBars.push(i);
    }

    // img style

    this.finalStyleImage = {
      width: `${this.imageSize}px`,
      height: `${this.imageSize}px`
    };

    // bar style
    this.finalStyleBar = {
      height: `${this.barHeight}px`
    }
  }

}
