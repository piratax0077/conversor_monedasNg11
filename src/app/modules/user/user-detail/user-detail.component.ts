import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  public users!: ICardUser[];
  public id: number;
  public currentUser!: ICardUser;
  public title: string;

  constructor(private route: ActivatedRoute, private userService: UserService) { 

    this.id = +this.route.snapshot.params.id;
    this.title = this.userService.getTitle();

    this.userService.getUserById(this.id).subscribe((r) => {
      if(!r.error){
        this.currentUser = r.data;
      }
    })


  }

  

}
