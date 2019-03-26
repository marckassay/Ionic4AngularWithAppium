import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RightmenuPage } from './rightmenu.page';



const routes: Routes = [
  {
    path: '',
    component: RightmenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RightmenuPage],
  exports: [RightmenuPage]
})
export class RightmenuPageModule { }
