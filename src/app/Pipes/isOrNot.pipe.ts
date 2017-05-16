import {Pipe} from '@angular/core';

@Pipe({name: 'isOrNot'})
export class isOrNotPipe {
  transform (input:number) {
      let result = "否"
      if(input == 1){
        result = "是"
      }
    return result;
  }
}