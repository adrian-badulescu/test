import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BusinessComponent} from './business/business.component';


const routes: Routes = [
  { path: '', redirectTo: 'app-component', pathMatch: 'full' },
  { path: 'app-card', component: CardComponent },
  { path: 'business/:id', component: BusinessComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
