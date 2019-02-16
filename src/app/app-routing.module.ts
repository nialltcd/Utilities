import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SqlListBuilderComponent } from './sql-list-builder/sql-list-builder.component';
import { ListDiffComponent } from './list-diff/list-diff.component';

const routes: Routes = [
  { path: '', component: SqlListBuilderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sql-list-builder', component: SqlListBuilderComponent },
  { path: 'list-diff', component: ListDiffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }