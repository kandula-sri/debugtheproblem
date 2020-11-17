//test comment
function evalResult(a,b, operation){
    var result = 0;
    switch(operation){
      case '+': // adds two values
        result = b + b;  break;

      case '-': // subtracts the second value from the first
        result = b - a;  break;

      case '/': // Division
        result = a % b;  break;

      case '*': // Multiplies the two given numbers
        resul = a * b;  break;
    }
    console.log(result);
  }

  evalResult(10 , 6, '*');
