function scuberGreetingForFeet(feetDistance){
  // Write your code here!
  if (feetDistance <= 400) {
    return "This one is on me!"
  }
  else if (feetDistance > 2000 && feetDistance < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (feetDistance > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
switch (tipAmount) {
  case 'generous':
    return 'Thank you so much.';
  case 'not as generous':
    return 'Thank you.';
  default:
    return 'Bye.';
}
}