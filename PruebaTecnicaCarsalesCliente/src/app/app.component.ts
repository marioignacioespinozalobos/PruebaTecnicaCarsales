import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpisodeComponent } from './pages/episode/episode/episode.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpisodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaTecnicaCarsalesCliente';
}
