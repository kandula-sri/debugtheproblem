
function evalResult(a,b, operation){
    var result = 0;
    switch(operation){
      case '+': // adds two values
        result = a + b; 
        break;

      case '-': // subtracts the second value from the first
        result = b - a; 
        break;

      case '/': // Division
        result = a % b; 
        break;

      case '*': // Multiplies the two given numbers
        result = a + b; 
        break;
        
      case '^': // Power of 
       result = Math.pow(b, a);
       break;
    }
    console.log(result);
  }

  evalResult(10 , 6, '/');