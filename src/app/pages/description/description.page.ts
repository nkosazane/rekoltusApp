import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  buyPlan(pricePlan:any){ 
    console.log(pricePlan);
    this.router.navigate(["/buyplan",{plan:pricePlan}]);

  }
  
}
