import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeftpagePageRoutingModule } from './leftpage-routing.module';

import { LeftpagePage } from './leftpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeftpagePageRoutingModule
  ],
 
})
export class LeftpagePageModule {}
