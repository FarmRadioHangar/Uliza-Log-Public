import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizeDate'
})
export class HumanizeDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let previous: any = new Date(value),
        current: any = new Date();

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';
    }
  }

}
