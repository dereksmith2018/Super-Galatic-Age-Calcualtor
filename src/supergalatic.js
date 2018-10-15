export class GalaticAge {
    constructor(age) {
    // this.year = year;
    this.age = age;
    // this.mercuryAge = 365 * age / 87.6;
    // this.venusAge =  365 * age / 224.7;
    // this.marsAge = 365 * age / 687;
    // this.jupiterAge = 365 * age / 4332.6;
  
    }
    // findYear(){
    //     let newGalaticYear = new Date(this.year);
    //     let newYear = newGalaticYear.getFullYear();
    //     return newYear;
    // }
    findMercury(){
        
        let mercuryAge = (365 * this.age) / 87.6;
        let newUserAge = mercuryAge;
        return newUserAge;
        // const mercury = ;
        // let newMercury = new Date(this.year);
        // let newMercuryAge = newMercury.getFullYear();
        // console.log(newMercuryAge * 30 / 87.6);
        // let getAge = newMercuryAge * 30 / 87.6;
        
        // return getAge;
    }
    findVenus(){
        let venusAge = (365 * this.age) / 224.7;
        let newUserAge = venusAge;
        return newUserAge;
    }
    findMars(){
        let marsAge = (365 * this.age) / 687;
        let newUserAge = marsAge;
        return newUserAge;
    }
    findJupiterAge() {
       
        let jupiterAge = (365 * this.age) / 4332.6;
        let newUserAge = jupiterAge;

        return newUserAge;
      
        
    }
    
}
