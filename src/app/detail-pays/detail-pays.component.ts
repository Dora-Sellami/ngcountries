import { Component, OnInit, Input } from '@angular/core';
import {Country} from '../Model/country';
import {PaysService} from '../services/pays.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-detail-pays',
  templateUrl: './detail-pays.component.html',
  styleUrls: ['./detail-pays.component.css']
})
export class DetailPaysComponent implements OnInit {
   country:Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paysService: PaysService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (myParams) => {console.log(myParams);
        this.paysService.getCountryByName(myParams.name).subscribe(
          (country) => this.country = country,
            
         (erreur) => this.router.navigate(['**'])
        );
      }
    );
  }

}
