const action = 'say_hello';
switch (action) {
  case 'say_hello': { 
    let message = 'hello';
    console.log(message);
    break;
  } 
  case 'say_hi': { 
    let message = 'hi';
    console.log(message);
    break;
  } 
  default: {
    console.log('Empty action received.');
    
  } 
}


