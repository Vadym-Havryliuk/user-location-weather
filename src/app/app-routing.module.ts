import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddedUsersComponent } from './added-users/added-users.component';
import { SavedUsersComponent } from './saved-users/saved-users.component';

const routes: Routes = [
  { path: '', component: AddedUsersComponent },
  { path: 'saved-users', component: SavedUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 