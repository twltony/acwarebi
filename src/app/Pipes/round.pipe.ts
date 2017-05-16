import {Pipe} from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe {
  transform (input:number) {
    debugger
    if(input==Infinity||input==null||input==undefined){
      return "-"
    }else{
      return Math.round(input);
    }
  }
}