import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refer-a-friend',
  templateUrl: './refer-a-friend.page.html',
  styleUrls: ['./refer-a-friend.page.scss'],
})
export class ReferAFriendPage implements OnInit {
userId = '';

  constructor() { 
   this.userId = sessionStorage.getItem("loggedInId"); 
}

  ngOnInit() {
  }

}
