import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelogPageRoutingModule } from './relog-routing.module';

import { RelogPage } from './relog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelogPageRoutingModule
  ],
  declarations: [RelogPage]
})
export class RelogPageModule {}
