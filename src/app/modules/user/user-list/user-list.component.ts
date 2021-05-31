import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { ICarouselItem } from '@shared/components/carousel/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {
  public carouselData: ICarouselItem[];
  public users :ICardUser[];
  public title: string;
  public userSubscription!: Subscription;
  public pricePesos: number;
  public priceDollar: number;

  constructor(private userService: UserService) {
      this.carouselData = CAROUSEL_DATA_ITEMS;
      this.users = [];
      this.userService.setTitle('Titulo traido desde un servicio');
      this.title = this.userService.getTitle();
      this.pricePesos = 0;
      this.priceDollar = 0;
   }
  ngAfterViewInit(): void {
    console.log('USER LIST - AFTER VIEW INIT');
  }
  ngOnDestroy(): void {
    if(this.userSubscription){
      console.log('unsubscribe');
      this.userSubscription.unsubscribe();
      this.userService.clearTitle();
    }
    
  }

  addAmount(){
    this.pricePesos += 10;
  }

  resetAmount(){
    this.pricePesos = 0;
    this.priceDollar = 0;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userSubscription = this.userService.getAllUsers().subscribe((r) => {
      if(!r.error){
       this.users = r.data;
      }
    });
  }


}
