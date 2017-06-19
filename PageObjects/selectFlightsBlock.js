'use strict';

var selectFlightsBlock = function() {

    this.flightFromElement = element(by.id("jbBookerDepart"));
    this.flightToElement = element(by.id("jbBookerArrive"));
    this.departDateElement = element(by.id("jbBookerCalendarDepart"));
    this.returnDateElement = element(by.id("jbBookerCalendarReturn"));
    this.findItButton = element(by.xpath("//div[@id='login-search-wrap']//input[@class='piejs']"));

    this.flightFrom = function(fromDestination) {
        this.flightFromElement.click();
        this.flightFromElement.clear();
        this.flightFromElement.sendKeys(fromDestination);

    };

    this.flightTo = function(toDestination){
      this.flightToElement.click();
      this.flightToElement.sendKeys(toDestination);
    }
    //use current format mm-dd-yyyy
    this.departDate = function(MMDDYYYY){
      this.departDateElement.click();
      this.departDateElement.clear();
      this.departDateElement.sendKeys(MMDDYYYY);
    }
    //use current format mm-dd-yyyy
    this.returnDate = function(MMDDYYYY){
      this.returnDateElement.click();
      this.returnDateElement.clear();
      this.returnDateElement.sendKeys(MMDDYYYY);
    }

    this.clickFindItButton = function(){
      this.findItButton.click();
    }


};

module.exports = selectFlightsBlock;
