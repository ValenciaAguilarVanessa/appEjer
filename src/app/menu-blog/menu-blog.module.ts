import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuBlogPageRoutingModule } from './menu-blog-routing.module';

import { MenuBlogPage } from './menu-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuBlogPageRoutingModule
  ],
  declarations: [MenuBlogPage]
})
export class MenuBlogPageModule {}
