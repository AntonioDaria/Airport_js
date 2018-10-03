'use strict';

describe("Feature test:", function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it("planes can be instructed to land", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("planes can be instructed to takeoff", function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });
});
