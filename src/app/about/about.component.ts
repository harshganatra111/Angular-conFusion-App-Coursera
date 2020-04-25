import { Component, OnInit } from '@angular/core';
import { CorporateLeadersService } from '../services/corporate-leaders.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  lead;
  constructor(private corporateLeadersService: CorporateLeadersService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.lead = this.corporateLeadersService.getLeaders();
    }, 2000);
  }

}
