console.log("Medium - Q2. Hitting the Jackpot");

function testJackpot(arr)
{
	var flag=0;
	for(var i=arr.length-1;i>=0;i--)
	{
		if(arr[i]==arr[0])
		{	
			flag++;
		}
	}
	if(flag==arr.length)
	{
		return true;
	}
	else
	{
		return false;
	}
}

console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["SS", "SS", "SS", "SS"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));
