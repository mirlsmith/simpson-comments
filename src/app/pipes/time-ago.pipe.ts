import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const dateObj = new Date(value)
      const secs = Math.floor((+new Date() - +dateObj) / 1000);
      if (secs < 5) // less than 5 seconds ago
        return 'Just now';
      if (secs > 3600*3) // more than 3 hours ago displays MM/DD/YYYY
        return `${dateObj.getDate().toString().padStart(2,'0')}/${(dateObj.getMonth()+1).toString().padStart(2,'0')}/${dateObj.getFullYear()}`
      const intervals: { [key: string]: number } = {
        'hour': 3600,
        'minute': 60,
        'second': 1,
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(secs / intervals[i]);
        if (counter > 0) {
          if (counter === 1) {
            return counter + ' ' + i + ' ago';
          } else {
            return counter + ' ' + i + ' ago'
          }
        }
      }
    }
    return value
  }
}
