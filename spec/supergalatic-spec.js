import { GalaticAge } from '../src/supergalatic.js';

describe('GalaticAge', function(){

  it('return the age on mercury that was inputted', function(){
    var mercuryAge = new GalaticAge (18);
    expect(mercuryAge.findMercury()).toEqual(75);
  });
  it('return the age on venus that was inputted', function(){
    var venusAge = new GalaticAge (18);
    expect(venusAge.findVenus()).toEqual(29);
  });
  it('return the age on mars that was inputted', function(){
    var marsAge = new GalaticAge (18);
    expect(marsAge.findMars()).toEqual(9);
  });
  it('return the age on mercury that was inputted', function(){
    var jupiterAge = new GalaticAge (18);
    expect(jupiterAge.findJupiter()).toEqual(1);
  });

});