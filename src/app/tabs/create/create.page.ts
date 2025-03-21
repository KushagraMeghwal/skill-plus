import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, IonModal } from '@ionic/angular';
import { IonHeader, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  imports: [IonicModule,CommonModule,]
})
export class CreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
