import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuBlogPage } from './menu-blog.page';

const routes: Routes = [
  {
    path: '',
    component: MenuBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuBlogPageRoutingModule {}
