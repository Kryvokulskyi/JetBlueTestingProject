'use strict';
var selectFlightsBlock = require('./PageObjects/selectFlightsBlock.js');
describe("suite for basics block", function() {
  var flight = new selectFlightsBlock();
  var EC = protractor.ExpectedConditions;
  beforeEach(function() {

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get("https://www.jetblue.com/#/");
  })

  it("basic check", function() {
    browser.waitForAngularEnabled(true);
    flight.flightFrom("New York");
    flight.flightTo("Chicago");
    flight.departDate("08-10-2017");
    flight.returnDate("08-15-2017");
    flight.clickFindItButton();


//  browser.wait(EC.visibilityOf(by.id("bodyBlock_0")), 5000);




  });

})
