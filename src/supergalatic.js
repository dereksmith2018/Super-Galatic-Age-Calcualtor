export class GalaticAge {
    constructor(year, age) {
    this.year = year;
    this.mercuryAge = //365 * age / 87.6
    this.venusAge = // 365 * age / 224.7
    this.marsAge = //365 * age / 687
    this.jupiterAge = //365 * age / 4332.6
  
    }
    findYear(){
        let newGalaticYear = new Date(this.year);
        let newYear = newGalaticYear.getFullYear();
        return newYear;
    }
    findMercury(){
        return
        // const mercury = ;
        // let newMercury = new Date(this.year);
        // let newMercuryAge = newMercury.getFullYear();
        // console.log(newMercuryAge * 30 / 87.6);
        // let getAge = newMercuryAge * 30 / 87.6;
        
        // return getAge;
    }
    findVenus(){
        return ;
    }
    findMars(){
        return ;
    }
    findJupiterAge() {
        return ;
    }
    
}
