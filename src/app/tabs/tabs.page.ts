import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, IonModal ,IonIcon} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports:[ CommonModule, IonicModule]  
})
export class TabsPage implements OnInit {
 selectTab:any
  constructor() { }

  ngOnInit() {
  }
  setCurrentTab(event:any){
    this.selectTab=event.tab;
  }
}
