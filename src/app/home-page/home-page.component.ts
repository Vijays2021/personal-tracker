import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';  // Import DatePipe
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-home-page',
  imports: [FormsModule, MatRadioModule, MatButtonModule,MatCardModule,MatFormFieldModule, MatInputModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: [DatePipe]  
})
export class HomePageComponent {
  constructor(private router: Router, private datePipe: DatePipe, private snackBar: MatSnackBar) {}
  selectedOption:String = '';
  currentDate: Date = new Date();

  showToast(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
      verticalPosition: 'top', // or 'bottom'
      horizontalPosition: 'right',
    });
  }

  saveData(){
    const formattedDate = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy');
    let userDataArray = JSON.parse(localStorage.getItem('userData') || '[]');
    const existingEntryIndex = userDataArray.findIndex((entry: any) => entry.date === formattedDate);
    if (existingEntryIndex > -1) {
      userDataArray[existingEntryIndex].selectedOption = this.selectedOption;
    } else {
      userDataArray.push({
        date: formattedDate,
        selectedOption: this.selectedOption
      });
    }
    localStorage.setItem('userData', JSON.stringify(userDataArray));
    this.showToast('Saved successfully!');
  }

  goToStats(){
    this.router.navigate(['/stats']);
  }
}
