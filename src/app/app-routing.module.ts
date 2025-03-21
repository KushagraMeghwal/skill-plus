import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';


 const routes: Routes = [
{
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
},
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs-routing.module').then( m => m.TabsPageRoutingModule)
    
  },
  {
    path:'home',
    loadChildren: () => import('./tabs/home/home-routing.module').then( (m) => m.HomePageRoutingModule)
  },
  {
    path:'leftpage',
    loadChildren: () => import('./tabs/leftpage/leftpage-routing.module').then( (m) => m.LeftpagePageRoutingModule)
  },
  {
    path:'message',
    loadChildren: () => import('./tabs/message/message-routing.module').then( (m) => m.MessagePageRoutingModule)
  },
  {
    path:'notification',
    loadChildren: () => import('./tabs/notification/notification-routing.module').then( (m) => m.NotificationPageRoutingModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
