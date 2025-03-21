import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-leftpage',
  templateUrl: './leftpage.page.html',
  styleUrls: ['./leftpage.page.scss'],
  imports: [IonicModule]
})
export class LeftpagePage implements OnInit {

  constructor(private router :Router,private navCtrl : NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/tabs/home']);
    // this.navCtrl.back() // Navigates back to the previous page
  }
}
