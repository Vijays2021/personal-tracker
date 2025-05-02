import { Component } from '@angular/core';
import { HomePageComponent } from "./home-page/home-page.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterModule,CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'},
})
export class AppComponent {
  title = 'personal-tracker-app';

}
