import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LibraryComponent } from './library/library.component';
const routes: Routes = [
  { path: '', component: LibraryComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }