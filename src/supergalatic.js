export class GalaticAge{
    constructor(age){
        this.age = age;
    }
    findDay(){
        let newDate = new Date(this.age);
        let newAge = newDate.getFullYear();
        return newAge;
    }
    findMercury(){
        let newMercury = new Date(this.year);
        let newMercuryAge = newMercury
    }
}