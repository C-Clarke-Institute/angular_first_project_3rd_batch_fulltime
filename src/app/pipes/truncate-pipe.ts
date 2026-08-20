import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

 transform(value: any, limit: number = 10, offset: number = 0): string {

   if( value.length > limit ) {
     return value.substring(offset, limit) + '...';
   } else {
     return value;
   }

  }
}
