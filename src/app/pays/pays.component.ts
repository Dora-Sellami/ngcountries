import { Component, OnInit } from '@angular/core';
import {Country} from '../Model/country';
import {PaysService} from '../services/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  countrys: Country[];
  constructor(private paysService: PaysService) { }

  ngOnInit(): void {
    this.paysService.getAllCountrys().subscribe(
      (countrys) => {
        this.countrys = countrys;
  }
    );
}
}
