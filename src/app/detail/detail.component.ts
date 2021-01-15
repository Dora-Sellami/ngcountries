import { Component, OnInit,Input } from '@angular/core';
import {Country} from '../Model/country';
import {PaysService} from '../services/pays.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() country: Country;
  constructor(private paysService: PaysService,
              private router: Router,) 
              { }

  ngOnInit(): void {
    this.paysService.selectItemSubject.subscribe(
      (country) => this.country = country
    );
  }

  getDetail() {
    this.router.navigate(['pays', this.country.name]);
  }
}
