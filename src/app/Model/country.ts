export class Languages {
  name: string;
  nativeName: string; 
  constructor(
    name = '',
    nativeName = '',){
      this.name = name;
      this.nativeName = nativeName;
    }
}
export class Country {
  
    name: string;
    nativeName: string;
    region: string;
    capital: string;
    population: number;
    area: number;
   languages:Languages[];
    flag: string;
    constructor(
      
      name: string = '',
      region: string = '',
      nativeName: string = '',
      capital: string,
      population: number = 0,
      area: number = 0,
      languages=[],
      flag: string = '') {
            
            this.name = name;
            this.region = region;
            this.nativeName = nativeName;
            this.capital = capital;
            this.population = population;
            this.area = area;
           this.languages=languages;
            this.flag = flag;
    }
  }
  

