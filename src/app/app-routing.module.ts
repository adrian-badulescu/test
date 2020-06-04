import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BusinessComponent } from './business/business.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-card', pathMatch: 'full' },
  { path: 'app-card', component: CardComponent },  
  { path: 'business/:id', component: BusinessComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
