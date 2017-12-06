import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';
const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'img/:id', component: ImgDetailComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
