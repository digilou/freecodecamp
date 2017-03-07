/*******
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

- Math.pow()
********/

function orbitalPeriod(arr) {
  var GM = 398600.4418; // gravitational parameter Math.pwr(km, 3) / Math.pwr(s,-2)
  var earthRadius = 6367.4447; // km
  
  // transform average altitude into orbital periods
  // round to nearest whole number with Math.round()
  arr.forEach(function(obj){
    // Kepler's Third Law
    var keplers = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
    delete obj.avgAlt;
    obj.orbitalPeriod = keplers;
  });
 
  // return array with new object orbitalPeriod:(keplers) and rm avgAlt
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
