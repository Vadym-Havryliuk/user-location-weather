import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddedUsersComponent } from './added-users/added-users.component';
import { SavedUsersComponent } from './saved-users/saved-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AddedUsersComponent,
    SavedUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
