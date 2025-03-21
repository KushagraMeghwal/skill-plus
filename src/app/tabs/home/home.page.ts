import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { GestureController, IonicModule, NavController } from '@ionic/angular';
import { ContentPage } from './content/content.page';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
  imports:[IonicModule,CommonModule,ContentPage]
})
export class HomePage implements OnInit {
  @ViewChild('swipeArea', { read: ElementRef }) swipeArea!: ElementRef;
  constructor(private router: Router,private gestureCtrl: GestureController,private navCtrl :NavController) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const gesture = this.gestureCtrl.create({
      el: this.swipeArea.nativeElement,
      gestureName: 'swipe',
      onEnd: ev => {
        if (ev.deltaX > 50) { // Swipe Right
          this.navCtrl.navigateForward('/message', { animated: true, animationDirection: 'forward' });
        } else if (ev.deltaX < -50) { // Swipe Left
          this.navCtrl.navigateForward('/leftpage', { animated: true, animationDirection: 'back' });
        }
      }
    });
    gesture.enable(true);
  }
  openM(){
    this.router.navigate(['/message']);
  }
  openN(){
    this.router.navigate(['/notification']);
  }
}


