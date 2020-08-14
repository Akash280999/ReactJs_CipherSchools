console.log("Very Easy - Q2. Divides Evenly");

function dividesEvenly(a,b)
 {
  // when remainder is zero means they divide each other
  if((a%b)==0)  
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));
console.log(dividesEvenly(2,2));