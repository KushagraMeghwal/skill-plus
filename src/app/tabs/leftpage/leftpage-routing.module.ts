import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeftpagePage } from './leftpage.page';

const routes: Routes = [
  {
    path: '',
    component: LeftpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeftpagePageRoutingModule {}
