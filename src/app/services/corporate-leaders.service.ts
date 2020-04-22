import { Injectable } from '@angular/core';
import { leaders } from '../shared/leaders';
@Injectable({
  providedIn: 'root',
})
export class CorporateLeadersService {
  constructor() {}
  getLeaders(){
    return leaders;
  }
}
