import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description1',
  templateUrl: './description1.page.html',
  styleUrls: ['./description1.page.scss'],
})
export class Description1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  buyPlan(pricePlan:any){ 
    console.log(pricePlan);
    this.router.navigate(["/buyplan",{plan:pricePlan}]);

  }
}
