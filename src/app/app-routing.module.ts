import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BusinessComponent } from './business/business.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-component', pathMatch: 'full' },
  {path: '', component: AppComponent},
  {path: 'app-card', component: CardComponent},

  { path: 'business/:id', component: BusinessComponent },
  // { path: '404', component: NotfoundComponent },
  // { path: '**', redirectTo: 'app-card' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
