import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';  // Import appRoutes

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],  // Use appRoutes instead of hardcoding
  exports: [RouterModule]
})
export class AppRoutingModule { }