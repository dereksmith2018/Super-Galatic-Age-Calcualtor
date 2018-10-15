export class GalaticAge {
    constructor(age) {
    this.age = age;
    }
    findMercury(){
        let mercuryAge = Math.floor((365 * this.age) / 87.6);
        let newUserAge = mercuryAge;
        return newUserAge;
    }
    findVenus(){
        let venusAge = Math.floor((365 * this.age) / 224.7);
        let newUserAge = venusAge;
        return newUserAge;
    }
    findMars(){
        let marsAge = Math.floor((365 * this.age) / 687);
        let newUserAge = marsAge;
        return newUserAge;
    }
    findJupiter() {
        let jupiterAge = Math.floor((365 * this.age) / 4332.6);
        let newUserAge = jupiterAge;
        return newUserAge;
      
        
    }
    
}
