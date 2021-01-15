import { Component, OnInit } from '@angular/core';
import {Country} from '../Model/country';
import {PaysService} from '../services/pays.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  countrys: Country[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private paysService: PaysService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (myParams) => {console.log('param'+myParams);
        this.paysService.getCountryByRegion(myParams.region).subscribe(
          (countrys) => this.countrys = countrys,
          
          (erreur) => this.router.navigate(['map'])
        );
      }
    );
    
  }

}
