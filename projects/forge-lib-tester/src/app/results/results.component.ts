import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  /**
   * Results of the form submission
   */
  public res: any;

  /**
   * Default constructor
   * @param router The Angular router
   */
  constructor(private router: Router) {
    this.res = JSON.stringify(this.router.getCurrentNavigation().extras.state, null, 2);
  }

  /**
   * Initializes the component
   */
  ngOnInit() {
  }

}
