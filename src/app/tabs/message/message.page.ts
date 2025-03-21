import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
  imports: [IonicModule]
})
export class MessagePage implements OnInit {

  constructor(private navCtrl:NavController,private router :Router) { }

  ngOnInit() {
  }
  goBack() {
    // this.router.navigate(['/tabs/home']);
    this.navCtrl.back(); // Navigates back to the previous page
  }
}
