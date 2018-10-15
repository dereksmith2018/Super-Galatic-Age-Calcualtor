export class GalaticAge {
    constructor(year, age) {
    this.year = year;
    this.age = age;
    // this.mercuryAge = 365 * age / 87.6;
    // this.venusAge =  365 * age / 224.7;
    // this.marsAge = 365 * age / 687;
    // this.jupiterAge = 365 * age / 4332.6;
  
    }
    findYear(){
        let newGalaticYear = new Date(this.year);
        let newYear = newGalaticYear.getFullYear();
        return newYear;
    }
    findMercury(){
        let age = 30;
        let mercuryAge = (365 * age) / 87.6;
        return mercuryAge;
        // const mercury = ;
        // let newMercury = new Date(this.year);
        // let newMercuryAge = newMercury.getFullYear();
        // console.log(newMercuryAge * 30 / 87.6);
        // let getAge = newMercuryAge * 30 / 87.6;
        
        // return getAge;
    }
    findVenus(){
        let age = 30;
        let venusAge = (365 * age) / 224.7;
        return venusAge;
    }
    findMars(){
        let age = 30;
        let marsAge = (365 * age) / 687;
        return marsAge;
    }
    findJupiterAge() {
        let age = 30;
        let jupiterAge = (365 * age) / 4332.6;
        return jupiterAge;
      
        
    }
    
}
