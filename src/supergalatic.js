export class GalaticAge {
    constructor(year){
        this.year = year;
        
    }
    findYear(){
        let newDate = new Date(this.year);
        let newYear = newDate.getFullYear();
        return newYear;
    }
    findMercury(){
        let newMercury = new Date(this.year);
        let newMercuryAge = newMercury.getFullYear();
        let getAge = parseInt(newMercuryAge * 30 / 87.6);
        return getAge;
    }
}
