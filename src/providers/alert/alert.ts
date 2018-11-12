import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AlertProvider {

  constructor() {}

  compare(list1, list2) {
    for (let a = 0; a < list2.length; a++) {
      for (let i = 0; i < list1.length; i++) {
        if (list2[a] == list1[i]) {
          return("igual");
        }else{
          return("Não é igual");
        }
      }
    }
  }
}
