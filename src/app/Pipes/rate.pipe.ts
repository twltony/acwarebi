import {Pipe} from '@angular/core';

@Pipe({name: 'ratePipe'})
export class ratePipe {
  transform (input:number) {
      let result
      if(isNaN(input)|| input ==Infinity){
        result = "0%"
      }else{
        result = Math.round(input*100) +"%"
      }
    return result;
  }
}