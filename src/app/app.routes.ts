import { Routes } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkoutsComponent } from './workouts/workouts.component';

export const routes: Routes = [
    // { path: '', component: HomePageComponent },
    { path: '', component: WorkoutsComponent },
    { path: 'stats', component: StatsComponent },
  ];
