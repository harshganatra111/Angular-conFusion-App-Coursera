import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { CorporateLeadersService } from '../services/corporate-leaders.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private corporateLeadersService: CorporateLeadersService
  ) {}
  lead;
  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe((dish) => this.dish = dish);
    this.promotionService.getFeaturedPromotion().then((promotion) => this.promotion = promotion);
    this.lead = this.corporateLeadersService.getLeaders();
   // console.log(this.lead[1]);
  }
}
