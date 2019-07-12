import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewquoteComponent } from './newquote/newquote.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: EditComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'addQ', component: NewquoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
