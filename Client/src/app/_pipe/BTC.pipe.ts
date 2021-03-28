import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BTC'
})
export class BTCPipe implements PipeTransform {

  transform(value: any[]): any[] {
    // get index of primary element
    const index = value.findIndex(el => el.buy=='BTC');
    // get the element itself
    const primaryElement = value[index];
    // remove the element from the array
    value.splice(index, 1);
    // put the element at the start of the array
    value.unshift(primaryElement);
    // return the new arrary
    return value;
  }

}
