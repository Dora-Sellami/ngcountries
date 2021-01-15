import { Component, OnInit } from '@angular/core';
import {Country} from '../Model/country';
import {PaysService} from '../services/pays.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countrys: Country[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private paysService: PaysService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  getReg(region) {
    this.router.navigate(['regions',region]);
  } 

}
