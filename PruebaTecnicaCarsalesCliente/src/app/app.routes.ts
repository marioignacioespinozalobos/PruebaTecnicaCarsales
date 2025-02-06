import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EpisodeComponent } from './pages/episode/episode/episode.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  
];

@NgModule({  
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }