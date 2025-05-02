import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Workout {
  name: string;
  gifUrl: string;
}

@Component({
  selector: 'app-workouts',
  imports: [CommonModule],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css'
})
export class WorkoutsComponent {
  chestWorkouts: Workout[] = [
    { name: 'Flat Dumbbell - 4x12', gifUrl: 'gifs/flat-dumbbell.gif' },
    { name: 'Incline Smith Press - 4x12', gifUrl: 'gifs/incline-smith.gif' },
    { name: 'Flat Smith Press - 4x12', gifUrl: 'gifs/flat-smith.gif' },
    { name: 'Cable Flys (Middle) - 3 sets', gifUrl: 'gifs/cable-fly-middle.gif' },
    { name: 'Cable Flys (Decline) - 3 sets', gifUrl: 'gifs/cable-fly-decline.gif' },
    { name: 'Dumbbell Pullover - 3 sets', gifUrl: 'gifs/dumbbell-pullover.gif' }
  ];

  tricepsWorkouts: Workout[] = [
    { name: 'Reverse Cable', gifUrl: 'gifs/reverse-cable.gif' },
    { name: 'Rope/Bar Press', gifUrl: 'gifs/rope-press.gif' }
  ];

  calfWorkouts: Workout[] = [
    { name: 'Calf Raises', gifUrl: 'gifs/calf-raises.gif' }
  ];
}
