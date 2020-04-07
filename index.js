function convertToF(celcius) {
    // code below this
    if(typeof celcius === "string" ){
      return "Only accept value types of Number";
      
    }
    let fahrenheit;
    fahrenheit = (celcius * (9/5)) + 32;
    pembulatan = Math.floor(fahrenheit)
    return pembulatan;
    // code above this
  }
  
  convertToF(30);
  convertToF(-10);
  convertToF(0);
  convertToF(20);
  
  // Test Cases
  // convertToF(0); should return a value of 32
  // convertToF("30")  should return "Only accept value types of Number"
  // convertToF(30) should return a value of 86
  // convertToF(30.9)  should return value of 87
  