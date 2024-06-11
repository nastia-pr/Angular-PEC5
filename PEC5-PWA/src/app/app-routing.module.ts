import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImagesDetailComponent } from './components/images-detail/images-detail.component';

const routes: Routes = [
  {path: '', component: ImagesListComponent},
  {path: 'character/:id', component: ImagesDetailComponent},
  {path: '**', component: ImagesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
