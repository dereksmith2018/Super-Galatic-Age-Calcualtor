import { GalaticAge, PlanetWeight } from '../src/supergalatic.js';

describe('GalaticAge', function(){

  it('return the age on mercury that was inputted', function(){
    const mercuryAge = new GalaticAge (18);
    expect(mercuryAge.findMercury()).toEqual(75);
  });
  it('return the age on venus that was inputted', function(){
    const venusAge = new GalaticAge (18);
    expect(venusAge.findVenus()).toEqual(29);
  });
  it('return the age on mars that was inputted', function(){
    const marsAge = new GalaticAge (18);
    expect(marsAge.findMars()).toEqual(9);
  });
  it('return the age on jupiter that was inputted', function(){
    const jupiterAge = new GalaticAge (18);
    expect(jupiterAge.findJupiter()).toEqual(1);
  });
  it('return the time for mercury that user has left to live', function(){
    const mercuryAge = new GalaticAge (18);
    expect(mercuryAge.timeLeftMercury()).toEqual(258);
  });
  it('return the time for venus that user has left to live', function(){
    const venusAge = new GalaticAge (18);
    expect(venusAge.timeLeftVenus()).toEqual(100);
  });
  it('return the time for mars that user has left to live', function(){
    const marsAge = new GalaticAge (18);
    expect(marsAge.timeLeftMars()).toEqual(33);
  });
  it('return the time for jupiter that user has left to live', function(){
    const jupiterAge = new GalaticAge (18);
    expect(jupiterAge.timeLeftJupiter()).toEqual(5);
  });
  it('return the weight of the person on the planet', function(){
    const mercuryWeight= new PlanetWeight (125);
    expect(mercuryWeight.gravityMercury()).toEqual(47 + " lbs");
  })
  it('return the weight of the person on the planet', function(){
    const venusWeight = new PlanetWeight (125);
    expect(venusWeight.gravityVenus()).toEqual(113 + " lbs");
  })
  it('returnn the weight of the person on the planet', function(){
    const marsWeight = new PlanetWeight (125);
    expect(marsWeight.gravityMars()).toEqual(47 + " lbs");
  })
  it('return the weight of the person on the planet', function(){
    const jupiterWeight = new PlanetWeight (125);
    expect(jupiterWeight.gravityJupiter()).toEqual(31500 + " lbs");
  })
});