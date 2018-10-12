import { GalaticAge } from '../src/supergalatic.js';

describe('GalaticAge', function(){

  it('return the year that was selected', function(){
    var testWeekYear = new GalaticAge ("10-2018");
    expect(testWeekYear.findYear()).not.toEqual("10-2018")
  });

});