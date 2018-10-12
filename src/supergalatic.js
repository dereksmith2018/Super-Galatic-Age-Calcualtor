export class GalaticAge {
    constructor(year) {
    this.year = year;
    
    }
    findYear(){
        let newGalaticYear = new Date(this.year);
        let newYear = newGalaticYear.getFullYear();
        return newYear;
    }
    findMercury(){
        let newMercury = new Date(this.year);
        let newMercuryAge = newMercury.getFullYear();
        console.log(newMercuryAge * 30 / 87.6);
        let getAge = newMercuryAge * 30 / 87.6;
        
        return getAge;
    }
}
