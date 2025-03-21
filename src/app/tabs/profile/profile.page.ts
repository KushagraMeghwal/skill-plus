import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
   imports: [IonicModule,CommonModule,]
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
