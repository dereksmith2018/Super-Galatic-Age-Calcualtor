export class GalaticAge {
    constructor(age) {
    this.age = age;
    }
    findMercury(){
        let mercuryAge = Math.floor((365 * this.age) / 87.6);
        let newUserAge = mercuryAge;
        return newUserAge;
    }
    timeLeftMercury(){
        let mercuryAge = Math.floor((365 * this.age) / 87.6);
        let newUserAge = mercuryAge;
        let timeMars = Math.floor((365 * 80) / 87.6) - newUserAge;
        return timeMars;
    }
    findVenus(){
        let venusAge = Math.floor((365 * this.age) / 224.7);
        let newUserAge = venusAge;
        return newUserAge;
    }
    timeLeftVenus(){
        let venusAge = Math.floor((365 * this.age) / 224.7);
        let newUserAge = venusAge;
        let timeVenus = Math.floor((365 * 80) / 224.7) - newUserAge;
        return timeVenus;
    }
    findMars(){
        let marsAge = Math.floor((365 * this.age) / 687);
        let newUserAge = marsAge;
        return newUserAge;
    }
    timeLeftMars(){
        let marsAge = Math.floor((365 * this.age) / 687);
        let newUserAge = marsAge;
        let timeVenus = Math.floor((365 * 80) / 687) - newUserAge;
        return timeVenus;
    }
    findJupiter() {
        let jupiterAge = Math.floor((365 * this.age) / 4332.6);
        let newUserAge = jupiterAge;
        return newUserAge;
    }
    timeLeftJupiter(){
        let jupiterAge = Math.floor((365 * this.age) / 4332.6);
        let newUserAge = jupiterAge;
        let timeJupiter = Math.floor((365 * 80) / 4332.6) - newUserAge;
        return timeJupiter;
    }
    
}
