import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-stats',
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  currentMonthOptionCounts: { [option: string]: number } = {};
  monthLabel: string = '';
  options = [
    { value: '1', label: 'Went to gym' },
    { value: '2', label: 'Read atleast a page' }
  ];
  ngOnInit(){
    const rawData = JSON.parse(localStorage.getItem('userData') || '[]');

    const today = new Date();
    const currentMonth = today.getMonth(); // 0-indexed
    const currentYear = today.getFullYear();
    const optionCountMap: { [key: string]: number } = {};

    rawData.forEach((entry: any) => {
      const [day, month, year] = entry.date.split('/').map(Number);
      const entryDate = new Date(year, month - 1, day);

      if (entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear) {
        const opt = entry.selectedOption || 'None';
        optionCountMap[opt] = (optionCountMap[opt] || 0) + 1;
      }
    });

    this.currentMonthOptionCounts = optionCountMap;

    // Label like: April 2025
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    this.monthLabel = `${monthNames[currentMonth]} ${currentYear}`;
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getOptionLabel(optionValue: string): string {
    const found = this.options.find(opt => opt.value === optionValue);
    return found ? found.label : 'Unknown';
  }
  
}
