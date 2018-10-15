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
  it('return the age on jupiter that was inputted', function(){
    var jupiterAge = new GalaticAge (18);
    expect(jupiterAge.findJupiter()).toEqual(1);
  });
  it('return the time for mercury that user has left to live', function(){
    var mercuryAge = new GalaticAge (18);
    expect(mercuryAge.timeLeftMercury()).toEqual(258);
  });
  it('return the time for venus that user has left to live', function(){
    var venusAge = new GalaticAge (18);
    expect(venusAge.timeLeftVenus()).toEqual(100);
  });
  it('return the time for mars that user has left to live', function(){
    var marsAge = new GalaticAge (18);
    expect(marsAge.timeLeftMars()).toEqual(33);
  });
  it('return the time for jupiter that user has left to live', function(){
    var jupiterAge = new GalaticAge (18);
    expect(jupiterAge.timeLeftJupiter()).toEqual(5);
  });
  
});