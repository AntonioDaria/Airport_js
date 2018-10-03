'use strict';

describe("Plane", function() {
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  });

  it("a plane can be instructed to land", function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it("a plane can be instructed to takeoff", function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith();
  });
});
