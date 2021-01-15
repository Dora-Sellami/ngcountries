import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Country} from '../Model/country';
import {PaysService} from '../services/pays.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  country:Country;
 
  constructor( private router: Router,
    private activatedRoute: ActivatedRoute,
    private paysService: PaysService,) { }

  ngOnInit(): void {
  }
  Filtre(formulaire:NgForm) {
  //console.log(formulaire.value['name']);
  this.router.navigate(['pays',formulaire.value['name']]);
  } 
}
